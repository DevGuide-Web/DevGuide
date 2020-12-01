import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DevGuide from '../src/template/DevGuide';
import Login from '../src/routes/Login/Login';
import Register from '../src/routes/Register/Register';
import AdminPage from '../src/routes/People/Admin/AdminPage';
import AdminHome from '../src/routes/People/Admin/Home/AdminHome';
import AddCourse from '../src/routes/People/Admin/Course/AddCourse';
import EditCourse from '../src/routes/People/Admin/Course/EditCourse';
import About from '../src/routes/People/User/About/About';
import Course from './routes/People/User/Guides/Course/Course';
import Guides from '../src/routes/People/User/Guides/Guides';
import Home from '../src/routes/People/User/Home/Home';
import Profile from '../src/routes/People/User/Profile/Profile';
import EditProfile from '../src/routes/People/User/Profile/Edit/EditProfile';
import Suggest from '../src/routes/People/User/Suggest/Suggest';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          {/* Home Routes */}
          <Route path='/' exact component={DevGuide} />
          {/* User Login & Register */}
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
          {/* ! Admin Route !*/}
          <Route path='/login/admin' exact component={AdminPage} />
          <Route path='/admin' exact component={AdminHome} />
          <Route path='/admin/add-course' exact component={AddCourse} />
          <Route path='/admin/edit-course' exact component={EditCourse} />
          {/* ! User Route !*/}
          <Route path='/suggest' exact component={Suggest} />
          <Route path='/home' exact component={Home} />
          <Route path='/profile' exact component={Profile} />
          <Route path='/profile/edit' exact component={EditProfile} />
          <Route path='/guides' exact component={Guides} />
          <Route path='/guides/course' exact component={Course} />
          <Route path='/about' exact component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
