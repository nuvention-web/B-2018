import React from "react";
import "../stylesheets/main.scss";
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

// app component
export default class App extends React.Component {
  // render
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <span>
            <AppBar
              title="Recipes"
              iconClassNameRight="muidocs-icon-navigation-expand-more"
              className="app-bar"
            />
            <div className="container">
              {this.props.children}
            </div>
          </span>
        </MuiThemeProvider>
      </div>
    );
  }
}
