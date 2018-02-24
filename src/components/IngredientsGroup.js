import React from "react";
import AppBar from 'material-ui/AppBar';

// Home page component
export default class IngredientsGroup extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
      </div>
    );
  }
}
