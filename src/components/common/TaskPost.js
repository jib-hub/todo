import React from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import AddButton from './AddButton';

const InputField = withStyles({
  root: {
      marginRight: '5px',
      width: '60%',
      maxWidth: '400px',
      '& label.Mui-focused': {
        color: '#fff'
      },
      [`& fieldset`]: {
      borderRadius: '4px 0 0 4px',
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
const InputFieldPW = withStyles({
  root: {
      marginRight: '5px',
      width: '30%',
      maxWidth: '150px',
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

export default class TaskPost extends React.Component {
  state = {
    name: '',
    cat: '',
    user: this.props.user
  }

  handleChangeName = event => {
    this.setState({ name: event.target.value });
  }
  handleChangeCat = event => {
    this.setState({ cat: event.target.value });
  }

  handleSubmit = event => {

    event.preventDefault();

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
      })
  }
  handleSubmitByKey = event => {
    event.preventDefault();
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
      })
  }

  render() {
    let input;
    return (
      <div>
        <form onSubmit={(event) => {
          this.handleSubmit(event);
        }}>
          <InputField
            hintText="Enter new task"
            label="new Task"
            onKeyPress={(event) => {
              var code = event.keyCode || event.which;
              if(code === 13) {
              this.handleSubmitByKey(event);
              }
            }} onChange={this.handleChangeName} />
            <InputFieldPW
              hintText="Enter Category"
              label="Category"
              onKeyPress={(event) => {
                var code = event.keyCode || event.which;
                if(code === 13) {
                this.handleSubmitByKey(event);
                }
              }}
              onChange={this.handleChangeCat} />
          <AddButton type="submit">ADD</AddButton>
        </form>
      </div>
    )
  }
}
