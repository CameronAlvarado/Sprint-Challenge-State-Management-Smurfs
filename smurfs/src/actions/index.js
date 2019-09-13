import axios from "axios";

export const FETCHING_DATA_START = "FETCHING_DATA_START";
export const FETCHING_DATA_SUCCESS = "FETCHING_DATA_SUCCESS";
export const FETCHING_DATA_FAILURE = "FETCHING_DATA_FAILURE";

export const SENDING_DATA_START = "SENDING_DATA_START";
export const SENDING_DATA_SUCCESS = "SENDING_DATA_SUCCESS";
export const SENDING_DATA_FAILURE = "SENDING_DATA_FAILURE";

export const getData = () => dispatch => {
  dispatch({ type: FETCHING_DATA_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => {
      console.log(res);
      dispatch({ type: FETCHING_DATA_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_DATA_FAILURE, payload: err.data.slip });
    });
};

export const sendData = ({name, age, height }) => dispatch => {
  dispatch({ type: SENDING_DATA_START });
  axios
    .post("http://localhost:3333/smurfs", {
      name,
      age,
      height
    })
    .then(res => {
      console.log(res.data);
      dispatch({ 
        type: SENDING_DATA_SUCCESS, 
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: SENDING_DATA_FAILURE, payload: err });
    });
};

