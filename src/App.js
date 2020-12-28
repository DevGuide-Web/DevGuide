import './App.css';
import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './routes/Auth/ProtectedRoute';
import DevGuide from './template/DevGuide';
import Login from './routes/Auth/Login';
import Register from './routes/Auth/Register';
import ChangePassword from './routes/User/Profile/Edit/ChangePassword';
import About from './routes/User/About/About';
import Guides from './routes/User/Guides/Guides';
import Home from './routes/User/Home/Home';
import Profile from './routes/User/Profile/Profile';
import EditProfile from './routes/User/Profile/Edit/EditProfile';
import Suggest from './routes/User/Suggest/Suggest';
import Android from './routes/User/Guides/Course/Android/Android';
import IOS from './routes/User/Guides/Course/iOS/IOS';
import Website from './routes/User/Guides/Course/Website/Website';
import Questioner from './routes/User/Questioner/Questioner';
import Redirect from './routes/Auth/Redirect';

function App() {
  const isAuth = localStorage.getItem('Authorization') ? true : false;

  return (
    <div className='App'>
      <Router>
        <Switch>
          {/* Home Routes */}
          <Route path='/' exact component={DevGuide} />
          {/* User Auth */}
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
          {/* ! User Route ! */}
          {/* <ProtectedRoute path='/suggest' exact component={Suggest} /> */}
          <ProtectedRoute
            path='/home'
            exact
            component={Home}
            isAuthenticated={isAuth}
          />
          <ProtectedRoute
            path='/profile'
            exact
            component={Profile}
            isAuthenticated={isAuth}
          />
          <ProtectedRoute
            path='/profile/edit'
            exact
            component={EditProfile}
            isAuthenticated={isAuth}
          />
          <ProtectedRoute
            path='/profile/changePassword'
            exact
            component={ChangePassword}
            isAuthenticated={isAuth}
          />
          <ProtectedRoute
            path='/guides'
            exact
            component={Guides}
            isAuthenticated={isAuth}
          />
          <ProtectedRoute
            path='/feedback'
            exact
            component={Questioner}
            isAuthenticated={isAuth}
          />
          <ProtectedRoute
            path='/about'
            exact
            component={About}
            isAuthenticated={isAuth}
          />
          {/* Course Route */}
          <ProtectedRoute
            path='/guides/android'
            exact
            component={Android}
            isAuthenticated={isAuth}
          />
          <ProtectedRoute
            path='/guides/ios'
            exact
            component={IOS}
            isAuthenticated={isAuth}
          />
          <ProtectedRoute
            path='/guides/website'
            exact
            component={Website}
            isAuthenticated={isAuth}
          />
          {/* Route Unknown */}
          <ProtectedRoute
            path='*'
            component={Redirect}
            isAuthenticated={isAuth}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
