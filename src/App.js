import React, { Component } from "react";
import { ArcaptchaWidget } from "./lib/index";
class App extends Component {
  constructor() {
    super();
    this.ArRef = React.createRef();
  }
  setChallenge = (challengeId) => {
    //do something with your challenge ID.
  };
  getToken(token) {
    console.log(token);
  }
  render() {
    return (
      <div>
        <ArcaptchaWidget
          ref={this.ArRef}
          site-key="0k2m92tx9p"
          onsetChallengeId={this.setChallenge}
          callback={this.getToken}
          theme="dark" //it's not required. Default is light
          lang="en" //it's not required. Default is fa
        />
        <div>lfnoruaeg</div>
        <ArcaptchaWidget
          ref={this.ArRef}
          site-key="89oep0u80t"
          onsetChallengeId={this.setChallenge}
          callback={this.getToken}
          theme="dark" //it's not required. Default is light
          lang="en" //it's not required. Default is fa
        />
        <ArcaptchaWidget
          ref={this.ArRef}
          site-key="0k2m92tx9p"
          onsetChallengeId={this.setChallenge}
          callback={this.getToken}
          theme="dark" //it's not required. Default is light
          lang="en" //it's not required. Default is fa
        />
      </div>
    );
  }
}

export default App;
