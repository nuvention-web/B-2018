import React from "react";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

const FoodCard = (props) => (
  <Card>
    <CardText className="match-text-container">
      <span className="match-text">{props.dish.match}&#37; match</span>
    </CardText>
    <CardMedia
      overlay={<CardTitle title={props.dish.title} subtitle={props.dish.details.calories + ", " + props.dish.details.time} />}
    >
      <img src={props.dish.imgUrl} alt="" />
    </CardMedia>
    <CardText color="green">
      {
        props.dish.pros.map(function(pro, idx) {
          return (
            <p key={"pro" + idx}>
              {":) " + pro}
            </p>
          )
        })
      }
      </CardText>
      <CardText color="red">
      {
        props.dish.cons.map(function(con, idx) {
          return (
            <p key={"con" + idx}>
              {":( " + con}
            </p>
          )
        })
      }
    </CardText>
    <CardActions>
      <RaisedButton label="Make It!" fullWidth={true} backgroundColor="#68d2ed" href={props.dish.url} />
    </CardActions>
  </Card>
);

export default FoodCard;
