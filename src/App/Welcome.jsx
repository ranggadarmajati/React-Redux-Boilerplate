import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';

const Welcome = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React Redux + Bootstrap Boilerplate
        </p>
        <p>
          Edit <code>src/App/Welcome.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://about.me/ranggadarmajati"
          target="_blank"
          rel="noopener noreferrer"
        >
          By Rangga Darmajati
        </a>
      </header>
    </div>
  );
}

function mapState(state) {
  const {  } = state;
  return {  };
}

const actionCreators = {
  
};


export default connect(mapState, actionCreators)(Welcome);
