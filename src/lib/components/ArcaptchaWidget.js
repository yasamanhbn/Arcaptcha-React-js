import React, { Component } from "react";

class ArCaptcha extends Component {
  constructor(props) {
    super(props);
    this.setRef = () => {
      return "arcaptcha";
    };

    // API Methods
    this.execute = this.execute.bind(this);
    this.resetCaptcha = this.resetCaptcha.bind(this);
  }
  state = {
    widget_id: "",
    id: "",
  };

  componentDidMount() {
    //Once captcha is mounted intialize ArCaptcha
    this.setID();
    var my_script = document.head.querySelector("#arcptcha-script");
    let script = my_script || document.createElement("script");
    if (!my_script) {
      window.arcaptchaWidgetLoading = new Promise((resolve, reject) => {
        script.src = `https://widget.arcaptcha.co/2/api.js`;
        script.id = "arcptcha-script";
        script.onload = () => {
          resolve();
          this.initialize();
        };
      });
    }
    if (my_script) {
      window.arcaptchaWidgetLoading.then(() => {
        this.initialize();
      });
    }
    if (!my_script) {
      document.head.appendChild(script);
    }
  }

  initialize() {
    this.loadCaptcha();
    window.addEventListener(
      `arcaptcha-token-changed-${this.state.widget_id}`,
      (event, v) => {
        /* this.props.onsetChallengeId(event.detail); */
      }
    );
  }
  getRandomID() {
    return (
      new Date().getTime().toString(36) + Math.random().toString(36).slice(2)
    );
  }

  execute() {
    window.arcaptcha.execute(this.state.widget_id);
  }

  loadCaptcha() {
    if (this.props.callback)
      window[`arcaptcha_callback_${this.state.id}`] = this.props.callback;
    const widgetId = window.arcaptcha.render(`#${this.state.id}`, {
      "site-key": this.props["site-key"],
      size: this.props.invisible ? "invisible" : "",
      callback: this.props.callback
        ? `arcaptcha_callback_${this.state.id}`
        : null,
      lang: this.props.lang,
      theme: this.props.theme,
    });
    this.setState({ widget_id: widgetId });
  }

  resetCaptcha() {
    window.arcaptcha.reset(this.state.widget_id);
  }

  setID() {
    this.setState({ id: `arcaptcha-widget-${this.getRandomID()}` });
  }

  render() {
    const elementId = this.state.id;
    return <div ref={this.setRef} id={elementId}></div>;
  }
}
export default ArCaptcha;
