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
          site-key="4pmvo77wq2"
          /* onsetChallengeId={this.setChallenge} */
          callback={this.getToken}
          theme="dark" //it's not required. Default is light
          lang="en" //it's not required. Default is fa
        />
        <ArcaptchaWidget
          ref={this.ArRef}
          site-key="h8a32dwwky"
          //onsetChallengeId={this.setChallenge}
          callback={this.getToken}
          theme="dark" //it's not required. Default is light
          lang="en" //it's not required. Default is fa
        />
      </div>
    );
  }
}

export default App;
