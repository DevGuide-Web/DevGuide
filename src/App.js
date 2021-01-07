import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DevGuide from "./template/DevGuide";
import Login from "./routes/Auth/Login";
import Register from "./routes/Auth/Register";
import ChangePassword from "./routes/User/Profile/Edit/ChangePassword";
import About from "./routes/User/About/About";
import Guides from "./routes/User/Guides/Guides";
import Home from "./routes/User/Home/Home";
import Profile from "./routes/User/Profile/Profile";
import EditProfile from "./routes/User/Profile/Edit/EditProfile";
import Questioner from "./routes/User/Questioner/Questioner";
import Redirect from "./routes/Auth/Redirect";
import Title1 from "./routes/User/Guides/Title1";
import Title2 from "./routes/User/Guides/Title2";
import Title3 from "./routes/User/Guides/Title3";
import Title4 from "./routes/User/Guides/Title4";
import Subject from "./routes/User/Guides/Course/Subject";
import Comment from "./routes/User/Guides/Course/Comment";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        {/* <Test /> */}
        <Router>
          <Switch>
            {/* Home Routes */}
            <Route path="/" exact component={DevGuide} />
            {/* User Auth */}
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            {/* ! User Route ! */}
            {/* <ProtectedRoute path='/suggest' exact component={Suggest} /> */}
            
            <Route
              path="/home"
              exact
              component={Home}
            />
            <Route
              path="/profile"
              exact
              component={Profile}
            />
            <Route
              path="/profile/edit"
              exact
              component={EditProfile}
            />
            <Route
              path="/profile/changePassword"
              exact
              component={ChangePassword}
            />
            <Route
              path="/guides"
              exact
              component={Guides}
            />
            <Route
              path="/feedback"
              exact
              component={Questioner}
            />
            <Route
              path="/about"
              exact
              component={About}
            />
            {/* Title Route */}
            <Route
              path="/guides/:id"
              exact
              component={Title1}
            />
            <Route
              path="/guides/:id/:id2"
              exact
              component={Title2}
            />
            <Route
              path="/guides/:id/:id2/:id3"
              exact
              component={Title3}
            />
            <Route
              path="/guides/:id/:id2/:id3/:id4"
              exact
              component={Title4}
            />
            <Route
              path="/guides/:id/:id2/:id3/:id4/:subject"
              exact
              component={Subject}
            />
            <Route path="/comment/:id" exact component={Comment}/>
            {/* Route Unknown */}
            <Route
              path="*"
              component={Redirect}
            />
          </Switch>
        </Router>
        
      </div>
    </Provider>
  );
}

export default App;
