import React from "react";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(fishKey => (
          <EditFishForm
            key={fishKey}
            fishKey={fishKey}
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish}
            fish={this.props.fishes[fishKey]}
          />
        ))}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>Add Fish Samples</button>
      </div>
    );
  }
}

export default Inventory;
