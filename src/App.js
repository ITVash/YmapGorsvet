import React from 'react';
import { Maps, AdminTools, Auth } from './Container';
import { Switch, Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const App = props => {
  const { isAuth, access } = props;
  return (
    <>
      <Switch>
        <Route exact path="/signin" render={ () => <Auth /> } />
        <Route exact path="/" render={ () => ( isAuth ? <Maps /> : <Redirect to="/signin" /> ) } />
        <Route exact path="/admin" render={ () => ( access >= 4 ? <AdminTools /> : <Redirect to="/" /> ) } />
      </Switch>
    </>
  )
}

export default connect(({auth}) => ({isAuth: auth.logIn, access: auth.accessLevel}))(App)
