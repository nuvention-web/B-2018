import React from "react";
import "../stylesheets/main.scss";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

// app component
export default class App extends React.Component {
  // render
  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}
