import React from 'react';
import { Maps, AdminTools, Auth } from './Container';
import { Switch, Route } from 'react-router-dom';
//import { connect } from 'react-redux';

const App = props => {
  //const { isAuth, access } = props;
  //( isAuth ? <Maps /> : <Redirect to="/signin" /> )
  return (
    <>
      <Switch>
        <Route exact path="/signin" render={ () => <Auth /> } />
        <Route exact path="/" render={ () => <Maps /> } />
        <Route exact path="/admin" render={ () => <AdminTools /> } />
      </Switch>
    </>
  )
}
//connect(({auth}) => ({isAuth: auth.logIn, access: auth.accessLevel}))(App)
export default App;
