import React, { useState } from "react";
import { AquariumModal } from "./AquariumModal";
import { GlobalStyles } from "./GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import EditAquarium from "./EditAquarium";
import AddFish from "./AddFish";
import AddFood from "./AddFood";
import AddPlants from "./AddPlants";
import AddWaterParams from "./AddWaterParams";



const Aquariums = (props) => {
  const [showAquariumModal, setShowAquariumModal] = useState(false);

  const openAquariumModal = () => {
    setShowAquariumModal((prev) => !prev);
  };

  function aquariumStatus(props) {
    const isActive = props.aquarium.is_active;
    if (isActive != false) {
      return "Actively used";
    }
    return "Not being used";
  }

  return (
    <Router>
      <Switch>
        <tbody>
          <tr>
            <td><button onClick={EditAquarium}>Edit</button></td>
            <td>{props.aquarium.name}</td>
            <td>{props.aquarium.water_capacity}</td>
            <td>{aquariumStatus(props)}</td>
            <td>
              <button>Add Fish</button>
            </td>
            <td>
              <button>Add Food</button>
            </td>
            <td>
              <button>Add Plants</button>
            </td>
            <td>
              <button>Water Parameters</button>
            </td>
          </tr>
        </tbody>
        <Route exact path="/aquariums/edit/" component={EditAquarium} />
        <Route exact path="/aquariums/fish/" component={AddFish} />
        <Route exact path="/aquariums/food/" component={AddFood} />
        <Route exact path="/aquariums/plants/" component={AddPlants} />
        <Route exact path="/aquariums/waterparams/" component={AddWaterParams} />
      </Switch>
    </Router>
  );
};

export default Aquariums;
