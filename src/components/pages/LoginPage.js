import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Wrapper from '../containers/Wrapper'
import Heading2 from '../common/Heading2';

import { withStyles } from '@material-ui/core/styles';
import PrimaryButton from '../common/PrimaryButton';
import TextField from '@material-ui/core/TextField';

const LoginField = withStyles({
  root: {
      marginTop: '1rem !important',
      width: '90%',
      maxWidth: '400px',
      '& label.Mui-focused': {
        color: '#fff'
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

const LoginButton = styled(PrimaryButton)`
  margin-top: 1rem !important;
  width: 90%;
  max-width: 400px;
`;

class LoginPage extends React.Component {
    state = {
      name:'',
      password: ''
    }
    render(){
      return (
      <>
      <Wrapper width="boxed">
      <Heading2 TextAlignCenter >Login</Heading2>
      <LoginField
        hintText="Enter your Username"
        label="Name"
        variant="outlined"
        onChange={(event) => {this.setState({
          name: event.target.value
        })}}
      />
      <br/>
      <LoginField
        type="password"
        hintText="Enter your Password"
        label="Password"
        variant="outlined"
        onChange={(event) => {this.setState({
          password: event.target.value
        })}}
      />
      <br/>
      <LoginButton label="Submit" onClick={(event) => {
        this.props.handleLoginSubmit(this.state.name, this.state.password);
      }}>Login</LoginButton>
      </Wrapper>
      </>
      )
    }
};


export default LoginPage;
