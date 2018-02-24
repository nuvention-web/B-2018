import React from "react";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import {GridList, GridTile} from 'material-ui/GridList';

const BatchCard = (props) => (
  <Card>
    <CardMedia
      overlay={<CardTitle title={props.batch.title} />}
    >
      <GridList
        cellHeight={180}
      >
        {props.batch.recipes.map((recipe, idx) => (
          <GridTile
            key={"recipe"+idx}
          >
            <img src={recipe.imgUrl} />
          </GridTile>
        ))}
      </GridList>
    </CardMedia>
    <CardText>
    <ul>
      {
        props.batch.ingredients.map(function(ingredient, idx) {
          return (
            <li key={"ingredient"+idx}>
              {ingredient.name} = &#36;{ingredient.price}
            </li>
          )
        })
      }
    </ul>
    Total Price = &#36;{props.batch.ingredients.reduce((prev, next) => prev + next.price, 0)}
    </CardText>
    <CardActions>
      <RaisedButton label="See Recipes" fullWidth={true} backgroundColor="#68d2ed" href={"/B"+props.batchNum} />
    </CardActions>
  </Card>
);

export default BatchCard;
