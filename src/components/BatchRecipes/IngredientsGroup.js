import React from "react";
import BatchCard from './BatchCard';
import batches from '../../common/batches';

export default class IngredientsGroup extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        <h2>We found one batch of recipes you pinned with ingredients in common that you might not have:</h2>
        {batches.map(function(batch, idx) {
          return (
            <div key={"batch" + idx}>
              <BatchCard className="batch-card" batch={batch} batchNum={idx} />
              <br></br>
              <br></br>
            </div>
          )
        })}
      </div>
    );
  }
}
