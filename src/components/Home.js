import React from "react";

// Home page component
export default class Home extends React.Component {
  // render
  render() {
    return (
      <div className="page-home">
        Try going to:
        <br></br>
        <a href="https://b-2018.firebaseapp.com/a">https://b-2018.firebaseapp.com/a</a>
        <br></br>
        <a href="https://b-2018.firebaseapp.com/b">https://b-2018.firebaseapp.com/b</a>
        <br></br>
        <a href="https://b-2018.firebaseapp.com/c">https://b-2018.firebaseapp.com/c</a>
        <br></br>
        for our 3 demos!
      </div>
    );
  }
}

// <iframe width="560" height="315"
//         src="https://www.youtube.com/embed/D7bE2l0aCqU"
//         frameborder="0"
//         allow="autoplay; encrypted-media"
//         allowfullscreen>
// </iframe>
