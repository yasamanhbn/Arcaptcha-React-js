import React, { Component } from "react";
import { ArcaptchaWidget } from "./lib/index";
class App extends Component {
  constructor() {
    super();
    this.ArRef = React.createRef();
  }
  setChallenge = (challengeId) => {
    console.log(challengeId)
    //do something with your challenge ID.
  };
  getToken(token) {
    //console.log(token);
  }
  render() {
    return (
      <div>
        <ArcaptchaWidget
          ref={this.ArRef}
          site-key=""
          callback={this.getToken}
          theme="dark" //it's not required. Default is light
          lang="en" //it's not required. Default is fa
          color="pink"
        />

      </div>
    );
  }
}

export default App;
