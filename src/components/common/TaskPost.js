import React from 'react';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { RespondTo } from '../../breakpoints/RespondTo';

import TextField from '@material-ui/core/TextField';
import AddButton from './AddButton';
import CatInputAutocompleteContent from './CatInputAutocompleteContent';

const InputField = withStyles({
  root: {
      marginRight: '5px',
      width: '100%',
      maxWidth: '600px',
      '& label.Mui-focused': {
        color: '#fff'
      },
      [`& fieldset`]: {
      borderRadius: '0',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green'
      },
      '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
          borderColor: '#fff'
        },
        '&.Mui-focused fieldset': {
          borderColor: '#fff'
        },
      },
    },
})((props) => <TextField
  color="secondary"
  variant="outlined" {...props} />);
const InputFieldCat = withStyles({
  root: {
      width: '100%',
      maxWidth: '600px',
      '& label.Mui-focused': {
        color: '#fff',
      },
      [`& fieldset`]: {
      borderRadius: '0',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: 'green',
      },
      '& .MuiOutlinedInput-root': {
        '&:hover fieldset': {
          borderColor: '#fff',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#fff',
        },
      },
    },
})((props) => <TextField
  color="secondary"
  variant="outlined" {...props} />);

const CatInputContainer = styled.div`
  width: 100%;
  margin-top: 15px;
  ${RespondTo.xs`
  `}
  ${RespondTo.sm`
    margin-top: 0px;
  `}
  ${RespondTo.md`
  `}
  ${RespondTo.lg`
  	max-width: 150px;
  `}
	margin-right: 5px;
	display: inline-flex;
	position: relative;
`;
const CatInputAutocomplete = styled.div`
  position: absolute;
  bottom: 0;
  transform: translateY(100%);
  background: rgb(0,0,0,0.5);
  color: #fff;
  text-align: left;
  width: 100%;
  z-index: 999;
  display: ${props => (props.show)? 'block' : 'none'};
`;

export default class TaskPost extends React.Component {
  state = {
    name: '',
    cat: '',
    user: this.props.user,
    autocomplete: '',
    showAutocomplete: true
  }

  handleChangeName = event => {
    this.setState({ name: event.target.value });
    this.handleAutoCompleteClose();
  }
  handleChangeCat = event => {
    this.setState({ cat: event.target.value });
  }
  handleChangeCatKey = event => {
    axios.get(`https://5eb1a93336d3ee001682e16b.mockapi.io/tasks`)
      .then(res => {
        const cats = res.data.map(x => (x.user===this.state.user) && x.cat).filter((v, i, a) => a.indexOf(v) === i);
        this.setState({ autocomplete: cats });
        this.handleAutoCompleteOpen();
      })
  }
  handleAutoCompleteClick = (newCat) => {
    this.setState({ cat: newCat });
    this.handleAutoCompleteClose();
  }
  handleAutoCompleteClose = () => {
    this.setState({ showAutocomplete: false });
  }
  handleAutoCompleteOpen = () => {
    this.setState({ showAutocomplete: true });
  }
  handleSubmit = event => {

    event.preventDefault();

    if(this.state.name !== '') {
      const task = {
        name: this.state.name,
        cat: this.state.cat,
        user: this.state.user
      };

      axios.post(`https://5eb1a93336d3ee001682e16b.mockapi.io/tasks`, { name: task.name, cat: task.cat, user: task.user })
        .then(res => {
          console.log(res);
          console.log(res.data);
          this.props.handleDataChange();
          this.setState({ name: '' });
          this.setState({ cat: '' });
          this.handleAutoCompleteClose();
        })
    } else {
      alert('Task empty! Please name your task!');
    }
  }
  handleSubmitByKey = event => {
    event.preventDefault();
    if(this.state.name !== '') {
      const task = {
        name: this.state.name,
        cat: this.state.cat,
        user: this.state.user
      };

      axios.post(`https://5eb1a93336d3ee001682e16b.mockapi.io/tasks`, { name: task.name, cat: task.cat, user: task.user })
        .then(res => {
          console.log(res);
          console.log(res.data);
          this.props.handleDataChange();
          this.setState({ name: '' });
          this.setState({ cat: '' });
          this.handleAutoCompleteClose();
        })
    } else {
      alert('Task empty! Please name your task!');
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => {
          this.handleSubmit(event);
        }}>
          <InputField
            hintText="Enter new task"
            label="new Task"
            value={this.state.name}
            onKeyPress={(event) => {
              var code = event.keyCode || event.which;
              if(code === 13) {
              this.handleSubmitByKey(event);
              }
            }} onChange={this.handleChangeName} />
            <CatInputContainer>
              <InputFieldCat
              hintText="Enter Category"
              label="Category"
              value={this.state.cat}
              onKeyPress={(event) => {
                var code = event.keyCode || event.which;
                if(code === 13) {
                this.handleSubmitByKey(event);
              } else {
                this.handleChangeCatKey();
              }
              }}
              onChange={this.handleChangeCat} />
              <CatInputAutocomplete show={this.state.showAutocomplete}>
              <CatInputAutocompleteContent handleAutoCompleteClick={this.handleAutoCompleteClick} data={this.state.autocomplete} />
              </CatInputAutocomplete>
            </CatInputContainer>
          <AddButton type="submit">ADD</AddButton>
        </form>
      </div>
    )
  }
}
