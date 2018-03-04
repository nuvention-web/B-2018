import React from "react";

import MVPCard from './MVPCard'
import { recipes } from '../../common/recipes/index.js'

import RaisedButton from 'material-ui/RaisedButton';

export default class MVPDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startIndex: 0,
      endIndex: 10,
      filteredRecipes: []
    };

    this.handleLoadMore = this.handleLoadMore.bind(this);
    this.filterRecipesByParams = this.filterRecipesByParams.bind(this);
  }

  componentDidMount() {
    console.log(this.props.location.query)
    this.filterRecipesByParams(this.props.location.query);
  }

  filterRecipesByParams(params) {
    let filteredRecipes = recipes;
    filteredRecipes = filteredRecipes
      .filter((recipe) => {
        if (params.numServings == "More than 5") {
          return recipe.recipe.yield > 5;
        } else {
          return recipe.recipe.yield >= parseInt(params.numServings);
        }
        return true;
      })
      console.log(filteredRecipes);
      filteredRecipes = filteredRecipes.filter((recipe) => {
        var cond1 = true;
        var cond2 = true;
        if (params.avoid.includes("Dairy")) {
          cond1 = recipe.recipe.healthLabels.includes("Dairy-Free");
        }
        if (params.avoid.includes("Gluten")) {
          cond2 = recipe.recipe.healthLabels.includes("Gluten-Free");
        }
        return cond1 && cond2;
      })
      console.log(filteredRecipes);
      filteredRecipes = filteredRecipes.filter((recipe) => {
        if (params.carbs == "Low Carb") {
          return recipe.recipe.dietLabels.includes("Low-Carb");
        } else if (params.carbs == "Paleo") {
          return recipe.recipe.healthLabels.includes("Paleo");
        } else if (params.carbs == "Low Fat") {
          return recipe.recipe.dietLabels.includes("Low-Fat");
        } else if (params.carbs == "Low Sugar") {
          return recipe.recipe.healthLabels.includes("Sugar-Conscious");
        }
        return true;
      })
      console.log(filteredRecipes);
      filteredRecipes = filteredRecipes.filter((recipe) => {
        if (params.meat == "No Red Meat") {
          return recipe.recipe.healthLabels.includes("Red meat-free");
        } else if (params.meat == "Pescatarian") {
          return recipe.recipe.healthLabels.includes("Pescatarian");
        } else if (params.meat == "Vegetarian") {
          return recipe.recipe.healthLabels.includes("Vegetarian");
        } else if (params.meat == "Vegan") {
          return recipe.recipe.healthLabels.includes("Vegan");
        }
        return true;
      })
      console.log(filteredRecipes);
      filteredRecipes = filteredRecipes.filter((recipe) => {
        if (params.numIngredients == "As few as possible") {
          return recipe.recipe.ingredients.length <= 6;
        } else if (params.numIngredients == "I value both variety and simplicity") {
          return recipe.recipe.ingredients.length <= 10;
        } else if (params.numIngredients == "No preference") {
          return true;
        } else if (params.numIngredients == "The more the merrier!") {
          return recipe.recipe.ingredients.length >= 6;
        }
        return true;
      });
      console.log(filteredRecipes)

    this.setState({filteredRecipes});
  }

  handleLoadMore() {
    this.setState({
      endIndex: this.state.endIndex+10
    });
  }

  render() {
    return (
      <div className="page-home">
        {this.state.filteredRecipes.slice(this.state.startIndex, this.state.endIndex).map(function(recipe, idx) {
          return (
            <div key={"recipe" + idx}>
              <MVPCard className="mvp-card" recipe={recipe}/>
              <br></br>
              <br></br>
            </div>
          )
        })}
        <RaisedButton label="See More" fullWidth={true} backgroundColor="#68d2ed" onClick={this.handleLoadMore} />
      </div>
    );
  }
}
