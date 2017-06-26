"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//stardate 2263.02
//User Story: I can type text to be translated into a text area.
//User Story: I can see a preview of the translated output that is updated as I type.

var InputPanel = function InputPanel(props) {
  return React.createElement(
    "div",
    { className: "markdown" },
    React.createElement("textarea", {
      placeholder: props.placeholderMarkdown,
      onChange: props.updateState,
      value: props.text
      // autoFocus
    })
  );
};

var OutputPanel = function OutputPanel(props) {
  return React.createElement(
    "div",
    { className: "preview" },
    React.createElement(
      "div",
      { className: props.placeholderPreview ? "screensaver" : "hide-me" },
      React.createElement("img", {
        className: "ufp",
        src: "https://engineerwithoutfear.github.io/web_dev/FreeCodeCamp/galactic-translator-react/css/UFP_Emblem.svg"
      })
    ),
    React.createElement(
      "div",
      { className: "previewText" },
      " ",
      React.createElement(
        "div",
        { className: props.language },
        React.createElement("div", { dangerouslySetInnerHTML: { __html: marked(props.text) } })
      )
    )
  );
};

var Header = function Header() {
  return React.createElement(
    "header",
    null,
    React.createElement(
      "div",
      { className: "header-text" },
      React.createElement(
        "span",
        { className: "header-text-1 insets" },
        "COMMAND CONSOLE: 09182"
      ),
      React.createElement(
        "span",
        { className: "header-text-2" },
        "USER: S 179-276 SP"
      )
    )
  );
};

var LanguageMenu = function LanguageMenu(props) {
  return React.createElement(
    "div",
    { className: "language-menu", onClick: props.onClick },
    React.createElement(
      "div",
      { className: "language-select" },
      React.createElement(
        "div",
        { className: "language-select-text" },
        React.createElement(
          "span",
          { className: "language-select-text-1 insets" },
          "TRANSLATION LANGUAGE"
        )
      )
    ),
    React.createElement(
      "div",
      { className: "language-current" },
      React.createElement(
        "div",
        { className: "language-current-text" },
        React.createElement(
          "span",
          { className: "language-current-text-1 insets" },
          props.language
        )
      )
    )
  );
};

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      placeholderMarkdown: "Terminal ready.",
      placeholderPreview: true,
      languages: ["vulcan", "romulan", "klingon", "borg", "ferengi", "dominion"],
      index: 0,
      language: "",
      text: ""
    };

    _this.updateState = _this.updateState.bind(_this);
    _this.selectLanguage = _this.selectLanguage.bind(_this);
    _this.updateLanguage = _this.updateLanguage.bind(_this);
    return _this;
  }

  App.prototype.componentDidMount = function componentDidMount() {
    this.selectLanguage();
  };

  App.prototype.updateState = function updateState(e) {
    this.setState({
      text: e.target.value,
      placeholderPreview: false
    });
  };

  App.prototype.selectLanguage = function selectLanguage() {
    this.setState({ language: this.state.languages[this.state.index] });
  };

  App.prototype.updateLanguage = function updateLanguage() {
    console.log(this.state.language);
    this.setState({
      index: this.state.index >= this.state.languages.length - 1 ? 0 : this.state.index + 1
    }, this.selectLanguage);
  };

  App.prototype.render = function render() {
    return React.createElement(
      "div",
      { className: "container" },
      React.createElement(Header, null),
      React.createElement(
        "div",
        { className: "display-panel" },
        React.createElement(InputPanel, {
          placeholderMarkdown: this.state.placeholderMarkdown,
          updateState: this.updateState,
          value: this.state.text
        }),
        React.createElement(OutputPanel, {
          placeholderPreview: this.state.placeholderPreview,
          text: this.state.text,
          language: this.state.language
        })
      ),
      React.createElement(LanguageMenu, {
        onClick: this.updateLanguage,
        language: this.state.language
      })
    );
  };

  return App;
}(React.Component);

// render all the things

ReactDOM.render(React.createElement(App, null), document.getElementById("container-react"));
