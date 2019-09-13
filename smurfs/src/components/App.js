import React, { Component, useState } from "react";
import Smurfs from './Smurfs.js';
import NewSmurf from './NewSmurf';

import { connect } from "react-redux";
import { getData } from "../actions";

import "./App.css";

function App({ getData, data }) {
// console.log(props);

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <button onClick={getData}>Click me to update data</button>
      <Smurfs data={data} />
      <NewSmurf />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    dataSend: state.dataSend, // <--- major blocker
    data: state.data,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(App);
