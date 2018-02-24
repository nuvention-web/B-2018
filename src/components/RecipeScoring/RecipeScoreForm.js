import React from "react";
import RaisedButton from 'material-ui/RaisedButton';
import Slider from 'material-ui/Slider';

export default class RecipeScoreForm extends React.Component {
  render() {
    return (
      <div className="page-home">
        <h2>Please tell us a bit about your priorities when it comes to cooking:</h2>
        <br></br>

        <h3>Price of Ingredients</h3>
        <div>
          <span className="dont-care">Don&#39;t Care</span><span className="important">Important!</span>
          <Slider step={0.25} value={0.5} />
        </div>
        <br></br>

        <h3>Number of Ingredients</h3>
        <div>
          <span className="dont-care">Don&#39;t Care</span><span className="important">Important!</span>
          <Slider step={0.25} value={0.5} />
        </div>
        <br></br>

        <h3>Healthiness of Recipe</h3>
        <div>
          <span className="dont-care">Don&#39;t Care</span><span className="important">Important!</span>
          <Slider step={0.25} value={0.5} />
        </div>
        <br></br>

        <h3>Quick/Easy Recipes</h3>
        <div>
          <span className="dont-care">Don&#39;t Care</span><span className="important">Important!</span>
          <Slider step={0.25} value={0.5} />
        </div>
        <br></br>

        <RaisedButton label="Done" primary={true} fullWidth={true} href="/a0" />
      </div>
    );
  }
}
