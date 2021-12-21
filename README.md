# React Arcaptcha Component Library

## Description
Arcaptcha Component Library for ReactJS.

[Arcaptcha](https://arcaptcha.ir/) is a drop-replacement for reCAPTCHA ans hCaptcha that protects user privacy, rewards websites, and helps companies get their data labeled.

Sign up at [Arcaptcha](https://arcaptcha.ir/sign-up) to get your sitekey today. You need a **sitekey** to use this library.

## Installation
You can install this library via npm with:

```
  npm i arcaptcha-react 
```

## Usage
The requirement for usage are the sitekey prop. The component will automatically include and load the Arcaptcha  API library and append it to the body.

```
import {ArcaptchaWidget}  from 'arcaptcha-react'

class YOUR_COMPONENT_NAME extends Component{
  constructor(){
    super();
    this.ArRef = React.createRef();
  }
  setChallenge = (challengeId)=>{
    //do something with your challenge ID.
  }
  render() {
    return (
      <div>
          <WidgetWrapper
              ref={this.ArRef}
              site-key="YOUR_SITE_KEY"
              onsetChallengeId={this.setChallenge}
              />
      </div>
    );
  }
}
```

## Props

| Name | Values/Type | Required	| Default	 | Description |
|--------|--------|--------|--------|--------|
|    sitekey    |    string   |    Yes   |    -   |    This is your sitekey, this allows you to load captcha. If you need a sitekey, please visit [Arcaptcha](https://arcaptcha.ir/sign-up), and sign up to get your sitekey   |
|    invisible    |    Boolean    |  NO  |  False | This allows you to use invisible captcha for you forms |
|    callback    |    Function    |  NO  |  null  | This function would be called in invisible captcha after solving captcha |  


## Methods

| Method | Description |
|--------|--------|
|    execute    |    Programmatically trigger a challenge request. You can use this, to load invisible captcha after trigger a button  |
|    resetCaptcha    |    	Reset the current challenge    |
