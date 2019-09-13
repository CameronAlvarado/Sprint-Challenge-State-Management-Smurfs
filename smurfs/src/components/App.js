import React, { Component } from "react";
import Smurfs from './Smurfs.js';

import { connect } from "react-redux";
import { getData } from "../actions";

import "./App.css";

function App({ getData, data }) {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <button onClick={getData}>Click me for data</button>
        <Smurfs data={data} />
      </div>
    );
  }

const mapStateToProps = state => {
  return {
    data: state.data,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(App);

