import React from "react";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const BatchRecipeCard = (props) => (
  <Card>
    <CardMedia
      overlay={<CardTitle title={props.recipe.title} />}
    >
      <img src={props.recipe.imgUrl} alt="" />
    </CardMedia>
    <CardActions>
      <RaisedButton label="Make It!" fullWidth={true} backgroundColor="#68d2ed" href={props.recipe.url} />
    </CardActions>
  </Card>
);

export default BatchRecipeCard;
