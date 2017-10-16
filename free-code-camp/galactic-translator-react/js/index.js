'use strict';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === "object" || typeof call === "function")
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) 
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : subClass.__proto__ = superClass;
  }

// stardate 2263.02 User Story: I can type text to be translated into a text
// area. User Story: I can see a preview of the translated output that is
// updated as I type.
var imgUFP = "https://engineerwithoutfear.github.io/web_dev/free-code-camp/galactic-translator" +
    "-react/css/UFP_Emblem.svg";

var InputPanel = function InputPanel(props) {
  return React.createElement('div', {
    className: 'panel-input markdown'
  }, React.createElement('textarea', {
    placeholder: props.placeholderMarkdown,
    onChange: props.translateInput,
    value: props.text,
    autoFocus: true
  }));
};

var OutputPanel = function OutputPanel(props) {
  return React.createElement('div', {
    className: 'panel-output'
  }, React.createElement('div', {
    className: props.placeholderScreensaver
      ? 'screensaver-visible'
      : 'screensaver-invisible'
  }, React.createElement('img', {
    className: 'container-ufp',
    src: props.screensaverURL
  })), React.createElement('div', {
    className: 'output-text'
  }, " ", React.createElement('div', {
    className: props.currentLanguage
  }, React.createElement('div', {
    dangerouslySetInnerHTML: {
      __html: marked(props.text)
    }
  }))));
};

var Header = function Header() {
  return React.createElement('header', null, React.createElement('div', {
    className: 'header-text'
  }, React.createElement('span', {
    className: 'header-text-1 insets'
  }, 'COMMAND CONSOLE: 09182'), React.createElement('span', {
    className: 'header-text-2'
  }, 'USER: S 179-276 SP')));
};

var LanguageMenu = function LanguageMenu(props) {
  return React.createElement('div', {
    className: 'language-menu',
    onClick: props.onClick
  }, React.createElement('div', {
    className: 'language-select'
  }, React.createElement('div', {
    className: 'language-select-text'
  }, React.createElement('span', {
    className: 'language-select-text-1 insets'
  }, 'TRANSLATION LANGUAGE'))), React.createElement('div', {
    className: 'language-current'
  }, React.createElement('div', {
    className: 'language-current-text'
  }, React.createElement('span', {
    className: 'language-current-text-1 insets'
  }, props.currentLanguage))));
};

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      placeholderMarkdown: "Terminal ready.",
      placeholderScreensaver: true,
      screensaverURL: imgUFP,
      languages: [
        "vulcan",
        "romulan",
        "klingon",
        "borg",
        "ferengi",
        "dominion"
      ],
      index: 0,
      currentLanguage: "",
      text: "",
      translatedText: ""
    };
    _this.translateInput = _this
      .translateInput
      .bind(_this);
    _this.selectLanguage = _this
      .selectLanguage
      .bind(_this);
    _this.updateLanguage = _this
      .updateLanguage
      .bind(_this);
    return _this;
  }

  App.prototype.componentDidMount = function componentDidMount() {
    this.selectLanguage();
  };

  App.prototype.translateInput = function translateInput(e) {
    this.setState({text: e.target.value, placeholderScreensaver: false});
  };

  App.prototype.selectLanguage = function selectLanguage() {
    this.setState({
      currentLanguage: this.state.languages[this.state.index]
    });
  };

  App.prototype.updateLanguage = function updateLanguage() {
    this.setState({
      index: this.state.index >= this.state.languages.length - 1
        ? 0
        : this.state.index + 1
    }, this.selectLanguage);
  };

  App.prototype.render = function render() {
    return React.createElement('div', {
      className: 'container-island'
    }, React.createElement(Header, null), React.createElement('div', {
      className: 'container-display '
    }, React.createElement(InputPanel, {
      placeholderMarkdown: this.state.placeholderMarkdown,
      translateInput: this.translateInput,
      value: this.state.text
    }), React.createElement(OutputPanel, {
      placeholderScreensaver: this.state.placeholderScreensaver,
      text: this.state.text,
      currentLanguage: this.state.currentLanguage,
      screensaverURL: this.state.screensaverURL
    })), React.createElement(LanguageMenu, {
      onClick: this.updateLanguage,
      currentLanguage: this.state.currentLanguage
    }));
  };

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));