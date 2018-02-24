import React from "react";
import BatchCard from './BatchCard';
import batches from '../common/batches';

export default class IngredientsGroup extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        {batches.map(function(batch, idx) {
          return (
            <div key={"batch" + idx}>
              <BatchCard className="batch-card" batch={batch}/>
              <br></br>
              <br></br>
            </div>
          )
        })}
      </div>
    );
  }
}
