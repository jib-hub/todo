import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Wrapper from '../containers/Wrapper'
import PrimaryButton from '../common/PrimaryButton';
import Heading2 from '../common/Heading2';
import { Redirect } from 'react-router-dom';
import TaskList from '../common/TaskList';

const BackButton = styled(PrimaryButton).attrs({
  color: 'primary'
})`
  border-top-left-radius: 4px !important;
  border-bottom-left-radius: 4px !important;
`;
class ToDoListPage extends React.Component {
    render(){
      const content =
        <>
        <Wrapper width="boxed">
        <TaskList user={this.props.state.username} />
        </Wrapper>
        </>;
      if(this.props.state.username === 'Wally' && this.props.state.password === '12345') {
        return (content)
      } else if (this.props.state.username === 'Juli' && this.props.state.password === '12345') {
        return(content);
      } else {
        return(<Redirect to='/' />);
      }
    }
};


export default ToDoListPage;
