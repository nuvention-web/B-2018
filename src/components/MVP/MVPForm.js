import React from "react";

import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class MVP extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numServings: 1,
      numIngredientsScale: 0.5
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.numServingsChange = this.numServingsChange.bind(this);
    this.numIngredientsScaleChange = this.numIngredientsScaleChange.bind(this);
  }

  handleSubmit() {
    var newUrl = "/d0?";
    for (var key in this.state) {
      if (!newUrl.endsWith("?")) {
        newUrl += "&";
      }
      newUrl += key + "=" + encodeURIComponent(this.state[key]);
    }
    window.location.href = newUrl;
  }

  numServingsChange(event, index, value) {
    this.setState({numServings: value});
  }

  numIngredientsScaleChange(event, index, value) {
    this.setState({numIngredientsScale: value});
  }

  render() {
    return (
      <div className="page-home">
        <h2>Please tell us a bit about your cooking preferences:</h2>
        <br></br>

        <h3>How many people are you cooking for?</h3>
        <div>
          <SelectField
            value={this.state.numServings}
            onChange={this.numServingsChange}
          >
            <MenuItem value={1} primaryText="1" />
            <MenuItem value={2} primaryText="2" />
            <MenuItem value={3} primaryText="3" />
            <MenuItem value={4} primaryText="4" />
            <MenuItem value={5} primaryText="5" />
          </SelectField>
        </div>
        <br></br>

        <h3>Number of Ingredients</h3>
        <div>
          <span className="dont-care">Any Number</span><span className="important">As Few as Possible</span>
          <Slider step={0.25} value={this.state.numIngredientsScale} onChange={this.numIngredientsScaleChange}/>
        </div>
        <br></br>

        <h3>Are you limiting carbohydrates?</h3>
        <div>
        <SelectField
          value={this.state.carbRestriction}
          onChange={this.carbRestrictionChange}
        >
          <MenuItem value={"no"} primaryText="No Restrictions" />
          <MenuItem value={2} primaryText="2" />
          <MenuItem value={3} primaryText="3" />
          <MenuItem value={4} primaryText="4" />
          <MenuItem value={5} primaryText="5" />
        </SelectField>
        </div>
        <br></br>

        <br></br>
        <RaisedButton label="See my recipes!" primary={true} fullWidth={true} onClick={this.handleSubmit}/>

      </div>
    );
  }
}
