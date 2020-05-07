import React from 'react';

// --- Routing ---
import { Route, Switch, withRouter } from 'react-router-dom';
import history from './services/history';

// --- MD5 ---
import md5 from 'md5';

// --- Logo ---
import TodoLogo from './img/todo_logo.svg';

// --- Theming ---
import {ThemeProvider} from 'styled-components';
import LightTheme from './theme/light';
import DarkTheme from './theme/dark';
import ThemeSwitcher from './components/common/ThemeSwitcher';

// --- Global Styles ---
import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyle';

// --- Pages ---
import {LoginPage, ToDoListPage, ErrorPage} from './components/pages';

// --- Container ---
import Body from './components/containers/Body';

// --- Common ---
import Heading1 from './components/common/Heading1';
import PrimaryButton from './components/common/PrimaryButton';

// --- Styled Components ---
const UserData = styled.div`
  font-size: 0.9rem;
  padding: 5px;
`;
const LoginFailureAlert = styled.div`
  width: 100%;
  background: red;
  color: #fff;
  padding: 10px 0;
  text-align: center;
  display: ${props => props.loginFailure ? 'block' : 'none'};
`;
const LogOutButton = styled(PrimaryButton)`
  width: auto !important;
  font-size: 0.8rem !important;
  padding: 2px 0 1px 0 !important;
  margin-top: 3px !important;
`;

class App extends React.Component  {
  state = {
    theme: LightTheme,
    username: '',
    password: '',
    loginFailure: false
  }
  handleToggleTheme = () => {
    this.setState({
      theme: this.state.theme.id === 'light' ? DarkTheme : LightTheme
    });
  }
  handleLoginSubmit = (user, pw) => {
    if(user === 'Wally' &&  md5(pw) === '827ccb0eea8a706c4c34a16891f84e7b') {
      this.setState({
      username: user,
      password:  md5(pw),
      loginFailure: false
      });
      this.props.history.push('/todo-list');
    } else if (user === 'Juli' &&  md5(pw) === '827ccb0eea8a706c4c34a16891f84e7b') {
      this.setState({
      username: user,
      password:  md5(pw),
      loginFailure: false
      });
      this.props.history.push('/todo-list');
    } else {
      this.setState({
      loginFailure: true
      });
    }
  }
  handleLogOut = () => {
    this.setState({
      username: '',
      password: '',
      loginFailure: false
    });
    this.props.history.push('/');
  }
  render() {
    return (
      <div className="App">
      <ThemeProvider theme={this.state.theme}>
        <ThemeSwitcher onClick={this.handleToggleTheme} >
        <div></div><div></div>
        </ThemeSwitcher>
        <LoginFailureAlert loginFailure={this.state.loginFailure}>{(this.state.loginFailure) ? 'Login wrong!' : ''}</LoginFailureAlert>
        <UserData>
          Username: {this.state.username}<br/>
          {(this.state.username) && <LogOutButton onClick={this.handleLogOut}>LogOut</LogOutButton>}
        </UserData>
        <Heading1><img src={TodoLogo} alt="Todo Logo" /></Heading1>
        <Body>
        <Switch history={history} >
            <Route path="/" render={ props => (<LoginPage handleLoginSubmit={this.handleLoginSubmit} />) } exact />
            <Route path="/todo-list" render={ props => (<ToDoListPage state={this.state} />) } />
            <Route component={ErrorPage} />
        </Switch>
        </Body>
      <GlobalStyle />
      </ThemeProvider>
      </div>
    );
  }
}

export default withRouter(App);
