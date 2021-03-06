import React from 'react';

import axios from 'axios';
import styled from 'styled-components';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

import TaskPost from './TaskPost';
const CustomCheckbox = withStyles({
  root: {
    color: 'darkgrey',
    '&$checked': {
      color: 'green',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const FlexContainer = styled.div`
  display: flex;
  position: relative;
  padding-top: ${props => (props.paddingTop)? '40px' : '0'};
  &:nth-child(1) {
	   padding-top: ${props => (props.paddingTop)? '20px' : '0'};
  }
`;
const Seperator = styled.div`
  width: 100%;
  height: 1px;
  background: lightgrey;
  position: absolute;
`;
const Task = styled.div`
  padding: 11px 0 7px 0;
  position: relative;
  overflow: hidden;
  margin-left: 5px;
  display: flex;
  width: 100%;
`;
const TaskContainer = styled.div`
  max-width: 700px;
  width: 90%;
	margin: 50px auto;
	background: #fff;
	color: black;
	padding: 5%;
  display: ${props => (props.show) ? 'block' : 'none'}
`;
const TaskLine = styled.div`
  transition: transform .5s ease;
  position: absolute;
  transform: translate(0%, 10%);
  width: 100%;
  height: 60%;
  background: rgba(0, 255, 22, 0.5);
  transform: ${props => (props.show) ? 'translateX(0%)' : 'translateX(-100%)'};
`;
const DeleteIcon = styled(DeleteForeverIcon)`
  margin-left: auto;
  fill: ${props => props.theme.danger} !important;
  padding: 9px;
  cursor: pointer;
  &:hover {
    fill: ${props => props.theme.dangerDarken} !important;
  }
`;
const HeadingCat = styled.div`
	position: absolute;
	transform: translateY(-100%);
  color: #999;
`;

export default class TaskList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://5eb1a93336d3ee001682e16b.mockapi.io/tasks`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }
  handleDataChange = () => {
    axios.get(`https://5eb1a93336d3ee001682e16b.mockapi.io/tasks`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }
  handleDelete = (key) => {
    console.log('key: ' + key);
    axios.delete(`https://5eb1a93336d3ee001682e16b.mockapi.io/tasks/${key}`)
      .then(res => {
        this.handleDataChange();
        console.log(res);
        console.log(res.data);
      })
  }
  handleChange = (key, state) => {
    axios.put(`https://5eb1a93336d3ee001682e16b.mockapi.io/tasks/${key}`, {state: !state})
      .then(res => {
        this.handleDataChange();
        console.log(res);
        console.log(res.data);
      })
  }
  render() {
    this.state.persons.sort((a, b) => (a.cat > b.cat) ? 1 : -1);
    let newCat = false;
    let lastCat;
    const filtered = this.state.persons.filter(person => person.user === this.props.user);
    let showContainer = (Object.keys(filtered).length !== 0) ? true : false;
    return (
      <>
      <TaskPost user={this.props.user} handleDataChange={this.handleDataChange} />
      <TaskContainer show={showContainer}>
        { this.state.persons.map((person) =>
          {if(this.props.user === person.user){
            (lastCat !== person.cat)? newCat=true : newCat=false;
            lastCat = person.cat
            return (
              <FlexContainer key={person.id} paddingTop={newCat}>
              {(newCat) && <><HeadingCat>{person.cat}</HeadingCat><Seperator /></>}
              <CustomCheckbox
                  checked={person.state}
                  onChange={() => this.handleChange(person.id, person.state)}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
              />
              <Task><div key={person.id}>{person.name}</div><TaskLine show={person.state} /></Task>
              <DeleteIcon onClick={() => this.handleDelete(person.id)} />
              </FlexContainer>
            )
          } else {
            return '';
          }}
        )}
      </TaskContainer>
      </>
    )
  }
}
