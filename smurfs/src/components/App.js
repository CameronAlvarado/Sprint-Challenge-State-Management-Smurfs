import React, { Component, useState } from "react";
import Smurfs from './Smurfs.js';
import NewSmurf from './NewSmurf';

import { connect } from "react-redux";
import { getData } from "../actions";
import { sendData } from "../actions";

import "./App.css";

function App({ getData, sendData, data }) {
console.log(data);
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <button onClick={getData}>Click me to get data</button>
      <button onClick={sendData}>Click me to send data</button>
      <Smurfs data={data} />
      <NewSmurf onAddPost={sendData}/>
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
  { getData, sendData }
)(App);
