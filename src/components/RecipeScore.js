import React from "react";
import AppBar from 'material-ui/AppBar';
import FoodCard from './FoodCard'
import dishes from '../common/dishes'

export default class RecipeScore extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        <AppBar
          title="NUvention"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
          className="app-bar"
        />
        {dishes.map(function(dish, idx) {
          return (
            <div key={"dish" + idx}>
              <FoodCard className="food-card" dish={dish}/>
              <br></br>
              <br></br>
            </div>
          )
        })}
      </div>
    );
  }
}
