import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DevGuide from './template/DevGuide';
import Login from './routes/Auth/Login';
import Register from './routes/Auth/Register';
import ForgotPassword from './routes/Auth/ForgotPassword';
import ChangePassword from './routes/User/Profile/Edit/ChangePassword';
import About from './routes/User/About/About';
import Course from './routes/User/Guides/Course/Course';
import Guides from './routes/User/Guides/Guides';
import Home from './routes/User/Home/Home';
import Profile from './routes/User/Profile/Profile';
import EditProfile from './routes/User/Profile/Edit/EditProfile';
import Suggest from './routes/User/Suggest/Suggest';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          {/* Home Routes */}
          <Route path='/' exact component={DevGuide} />
          {/* User Auth */}
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
          <Route path='/forgotPassword' exact component={ForgotPassword} />
          {/* ! User Route !*/}
          <Route path='/suggest' exact component={Suggest} />
          <Route path='/home' exact component={Home} />
          <Route path='/profile' exact component={Profile} />
          <Route path='/profile/edit' exact component={EditProfile} />
          <Route
            path='/profile/changePassword'
            exact
            component={ChangePassword}
          />
          <Route path='/guides' exact component={Guides} />
          <Route path='/guides/course' exact component={Course} />
          <Route path='/about' exact component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
