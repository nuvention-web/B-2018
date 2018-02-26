import React from "react";
import AppBar from 'material-ui/AppBar';
import RecipeMetricCard from './RecipeMetricCard'
import recipemetrics from '../../common/recipemetrics'

export default class TrustRecipeQuality extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        {recipemetrics.map(function(recipemetric, idx) {
          return (
            <div key={"recipemetric" + idx}>
              <RecipeMetricCard className="food-card" recipemetric={recipemetric} />
              <br></br>
              <br></br>
            </div>
          )
        })}
      </div>
    );
  }
}
