import React from "react";

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';

import ReactPlayer from 'react-player'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  }
};

const RecipeMetricCard = (props) => (
  <Card>
    <CardTitle title={props.recipemetric.title} className="match-text-container" />
    <CardMedia>
      <div style={styles.root}>
        <GridList style={styles.gridList} cols={2.2}>
          {props.recipemetric.imgUrls.map((url, idx) => (
            <GridTile key={url+idx}>
              <img src={url} />
            </GridTile>
          ))}
        </GridList>
      </div>
    </CardMedia>

    <br></br><br></br>

    <CardMedia>
      <ReactPlayer url={props.recipemetric.vidUrl} />
    </CardMedia>

    <br></br>

    <CardText className="match-text-container">
      <h2>Because you liked:</h2>
      {props.recipemetric.relatedRecipes.map((relatedRecipe, idx) => (
        <h3 key={"relatedRecipe"+idx}>{relatedRecipe}</h3>
      ))}
    </CardText>

    <Divider />
    <br></br>

    <CardText className="match-text-container">
      <h2>Elena also liked this recipe.</h2>
    </CardText>

    <br></br>
    <Divider />
    <br></br>

    <CardMedia>
      <img src={"https://drive.google.com/uc?export=view&id=164L_w6453YQ54nxiFX4E1K3E4rEEuIWi"} alt="" />
    </CardMedia>

    <br></br>

    <CardActions>
      <RaisedButton label="Make It!" fullWidth={true} backgroundColor="#68d2ed" href={props.recipemetric.url} />
    </CardActions>
  </Card>
);

export default RecipeMetricCard;
