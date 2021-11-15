import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavigationBar from "./NavigationBar/NavigationBar";
import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import CarouselLanding from "./LandingScreen/Carousel";
import RegisterScreen from "./Authentication/RegisterScreen";
import SignInScreen from "./Authentication/SigInScreen";
import Profile from "./Views/ProfileScreen";
import Logout from "./Authentication/Logout";



class App extends Component {
  state = {};

  componentDidMount() {
    const jwt = localStorage.getItem("token");
    try {
      const user = jwtDecode(jwt);
      this.setState({
        user,
      });
      console.log(user);
    } catch {}
  }

  // getAllAquariums = async () => {
  //   try {
  //     let responseAllAquariums = await axios.get(
  //       "http://127.0.0.1:8000/api/aquariums/all/"
  //     );
  //     console.log(responseAllAquariums.data);
  //     this.setState({
  //       aquariums: responseAllAquariums.data,
  //     });
  //   } catch (ex) {
  //     console.log("Error in API call!");
  //   }
  // };

  render() {
    const user = this.state.user;
    return (
      <Router>
        <div className="App">
          <NavigationBar user={user} />
          <div className="row">
            <div className="col-md-3"></div>
            <Switch>
              <div className="col-md-6">
                <Route path="/" exact component={CarouselLanding} />
                {/* <Route path='/profile/' render={props => {
                  if (!user){
                    return <Redirect to="/" />;
                  } else {
                    return <Profile {...props} user={user} />
                  }
                }}
                /> */}
                <Route path='/register/' component={RegisterScreen} />
                <Route path='/login/' component={SignInScreen} />
                <Route path='/profile/' component={Profile} />
                <Route path='/logout/' component={Logout} />
                {/* <Route path='/not-found/' component={NotFound} /> */}
                {/* <Route path='/' exact component={LandingScreen} /> */}
                {/* <Redirect to='/not-found/' /> */}
              </div>
            </Switch>
            <div className="col-md-3"></div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
