import React, { useEffect } from "react";
import Smurfs from './Smurfs.js';

import { connect } from "react-redux";
import { getData } from "../actions";

import "./App.css";
import NewSmurf from "./NewSmurf.js";

const App = ({ getData, data, isFetching }) => {


  useEffect(() => {
    // run action creator when the component mounts
    getData();
  }, [getData]);

  if (isFetching) {
    return <h3>Fetching smurfs</h3>;
  }

console.log(data);

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      {/* <button onClick={getData}>Click me to update data</button> */}
      <NewSmurf />
      <Smurfs data={data} />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    // dataSend: state.dataSend, // <--- major blocker
    data: state.data,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(App);
