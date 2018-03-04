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
    this.filterRecipesByParams(this.props.location.query);
  }

  filterRecipesByParams(params) {
    let filteredRecipes = recipes.filter((recipe) =>
      recipe.recipe.ingredients.length <= 20*(1 - params.numIngredients)+5
    )
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
