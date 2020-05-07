import React from 'react';
import Wrapper from '../containers/Wrapper';
import { Redirect } from 'react-router-dom';
import TaskList from '../common/TaskList';

class ToDoListPage extends React.Component {
    render(){
      const content =
        <>
        <Wrapper width="boxed">
        <TaskList user={this.props.state.username} />
        </Wrapper>
        </>;
      if(this.props.state.username === 'Wally' && this.props.state.password === '827ccb0eea8a706c4c34a16891f84e7b') {
        return (content)
      } else if (this.props.state.username === 'Juli' && this.props.state.password === '827ccb0eea8a706c4c34a16891f84e7b') {
        return(content);
      } else {
        return(<Redirect to='/' />);
      }
    }
};


export default ToDoListPage;
