import React from "react";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import batches from '../common/batches';
import BatchRecipeCard from './BatchRecipeCard';

let batchIdx = 0;

export default class BatchDisplay1 extends React.Component {
  render() {
    return (
      <div className="page-home">
        {
          batches[0].recipes.map(function(recipe, idx) {
            return (
              <div key={"recipe" + idx}>
                <BatchRecipeCard className="food-card" recipe={recipe}/>
                <br></br>
                <br></br>
              </div>
            )
          })
        }
      </div>
    );
  }
}
