import WidgetWrapper from './lib/components/widgetWarpper';
import React, { Component } from 'react';

class App extends Component{
  constructor(){
    super();
    this.ArRef = React.createRef();
  }
  setChallenge = (challengeId)=>{
    /* setTimeout(()=>{
      this.ArRef.current.resetCaptcha()
    },10000) */
  }
  render() {
    return (
      <div>
          <WidgetWrapper
              ref={this.ArRef}
              invisible={false}
              site-key="21smftb02t"
              onsetChallengeId={this.setChallenge}
              />
      </div>
    );
  }
}

export default App;