import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import './App.css';
import Container from './components/Container'

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}

export default App