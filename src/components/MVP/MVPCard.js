import React from "react";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

export default class MVPCard extends React.Component {

  getSubtitle(recipe) {
    return (
      Math.round(recipe.calories/recipe.yield) + " cal, " + recipe.ingredients.length + " ingredients"
    )
  }

  render() {
    return (
      <Card>
        <CardMedia
          overlay={<CardTitle
            title={this.props.recipe.recipe.label}
            subtitle={this.getSubtitle(this.props.recipe.recipe)}
            />}
        >
          <img src={this.props.recipe.recipe.image} alt="" />
        </CardMedia>
        <CardActions>
          <RaisedButton label="Make It!" fullWidth={true} backgroundColor="#68d2ed" href={this.props.recipe.recipe.url} />
        </CardActions>
      </Card>
    )
  }
}
