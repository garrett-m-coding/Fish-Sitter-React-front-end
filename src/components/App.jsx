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
import AddFood from "./AddToAquarium/AddFood/AddFood";
import AddPlants from "./AddToAquarium/AddPlants/AddPlants";
import AddWaterParams from "./AddToAquarium/AddWaterParams/AddWaterParams";
import EditAquarium from "./AquariumProfile/EditAquarium";



class App extends Component {
  state = {
    user :"",
    aquariums: [],
    fishes: [],
    plants: [],
    food: [],
    waterParams: [],
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
                <Route exact path='/register/' component={RegisterScreen} />
                <Route exact path='/login/' component={SignInScreen} />
                <Route exact path='/profile/' component={AquariumsProfile} />
                <Route exact path='/logout/' component={Logout} />
                <Route exact path="/" component={CarouselLanding} />
                <Route exact path="/aquarium/edit/" component={EditAquarium} /> 
                <Route exact path="/aquarium/fish/" component={AddFish} />
                <Route exact path='/aquarium/plants/' component={AddPlants} />
                <Route exact path='/aquarium/food/' component={AddFood} />
                <Route exact path='/aquarium/water/' component={AddWaterParams} />
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
