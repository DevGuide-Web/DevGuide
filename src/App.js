import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
          {/* ! User Route ! */}
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
          <Route path='/about' exact component={About} />
          {/* Course Route */}
          <Route path='/guides/android' exact component={Android} />
          <Route path='/guides/ios' exact component={IOS} />
          <Route path='/guides/website' exact component={Website} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
