"use strict";

//stardate 2263.02
//User Story: I can type text to be translated into a text area.
//User Story: I can see a preview of the translated output that is updated as I type.
var languages = ["Vulcan", "Romulan", "Klingon", "Borg", "Ferengi", "Dominion"];

var App = React.createClass({
  displayName: "App",

  // set the display text of the input box
  getInitialState: function getInitialState() {
    return {
      placeholderMarkdown: "Terminal ready.",
      placeholderPreview: true,
      language: languages[0],
      text: ""
    };
  },
  updateState: function updateState(event) {
    this.setState({
      text: event.target.value,
      placeholderPreview: false
    });
  },
  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "header",
        null,
        React.createElement(
          "div",
          { className: "header-text" },
          React.createElement(
            "span",
            { className: "header-text-1" },
            "COMMAND CONSOLE: 09182"
          ),
          React.createElement(
            "span",
            { className: "header-text-2" },
            "USER: S 179-276 SP"
          )
        )
      ),
      React.createElement(
        "div",
        { className: "container-flexbox" },
        React.createElement(
          "div",
          { className: "markdown" },
          React.createElement("textarea", { placeholder: this.state.placeholderMarkdown, onChange: this.updateState,  value: this.state.text, autoFocus: true})
        ),
        React.createElement(
          "div",
          { className: "preview" },
          React.createElement(
            "div",
            { className: this.state.placeholderPreview ? "screensaver" : "hide-me" },
            React.createElement("img", { className: "ufp", src: "http://engineerwithoutfear.com/fonts/UFP_Emblem.svg" })
          ),
          React.createElement(
            "div",
            { className: "previewText" },
            React.createElement("div", { dangerouslySetInnerHTML: { __html: marked(this.state.text) } })
          )
        )
      ),
      React.createElement(
        "div",
        { className: "language-menu" },
        React.createElement(
          "footer",
          null,
          React.createElement(
            "div",
            { className: "footer-text" },
            React.createElement(
              "span",
              { className: "footer-text-1" },
              "TRANSLATION LANGUAGE"
            )
          )
        ),
        React.createElement(
          "div",
          { className: "language" },
          React.createElement(
            "div",
            { className: "language-text" },
            React.createElement(
              "span",
              { className: "language-text-1" },
              "VULCAN"
            )
          )
        )
      )
    );
  }
});

// render all the things
ReactDOM.render(React.createElement(App, null), document.getElementById('container-react'));
