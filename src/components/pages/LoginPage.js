import React from 'react';
import styled from 'styled-components';
import Wrapper from '../containers/Wrapper'
import Heading2 from '../common/Heading2';

import { withStyles } from '@material-ui/core/styles';
import PrimaryButton from '../common/PrimaryButton';
import TextField from '@material-ui/core/TextField';

const LoginField = withStyles({
  root: {
      marginTop: '1rem !important',
      width: '100%',
      maxWidth: '600px',
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
  width: 100%;
  max-width: 600px;

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
        onKeyPress={(event) => {
          var code = event.keyCode || event.which;
          if(code === 13) {
            this.props.handleLoginSubmit(this.state.name, this.state.password);
          }
        }}
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
        onKeyPress={(event) => {
          var code = event.keyCode || event.which;
          if(code === 13) {
            this.props.handleLoginSubmit(this.state.name, this.state.password);
          }
        }}
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
