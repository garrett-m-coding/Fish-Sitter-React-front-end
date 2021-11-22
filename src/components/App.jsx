import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavigationBar from "./NavigationBar/NavigationBar";
// import axios from "axios";
import jwtDecode from "jwt-decode";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Redirect,
} from "react-router-dom";
import CarouselLanding from "./LandingScreen/Carousel";
import RegisterScreen from "./Authentication/RegisterScreen";
import SignInScreen from "./Authentication/SigInScreen";
import AquariumsProfile from "./AquariumProfile/ProfileScreen";
import Logout from "./Authentication/Logout";
import AddFish from "./AddToAquarium/AddFish/AddFish";



class App extends Component {
  state = {
    aquariums: [],
    user :[],
  };

  componentDidMount() {
    const jwt = localStorage.getItem("token");
    // window.location = '/';
    try {
      const user = jwtDecode(jwt);
      this.setState({
        user,
      });
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
            <div className="col-md-2"></div>
            <Switch>
              <div className="col-md-8">
                {/* <Route path='/profile/' render={props => {
                  if (!user){
                    return <Redirect to="/login/" />;
                  } else {
                    return <AquariumsProfile {...props} user={user} />
                  }
                }}
                /> */}
                <Route path='/register/' component={RegisterScreen} />
                <Route path='/login/' component={SignInScreen} />
                <Route path='/profile/' component={AquariumsProfile} />
                <Route path='/logout/' component={Logout} />
                <Route exact path="/" component={CarouselLanding} />
                <Route exact path="/aquariums/fish/" component={AddFish} />
                {/* <Route path='/aquarium/plants/' component={AddPlants} /> */}
                {/* <Route path='/aquarium/food/' component={AddFood} /> */}
                {/* <Route path='/aquarium/water/' component={AddWaterParams} /> */}
                {/* <Redirect to='/not-found/' /> */}
              </div>
            </Switch>
            <div className="col-md-2"></div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
