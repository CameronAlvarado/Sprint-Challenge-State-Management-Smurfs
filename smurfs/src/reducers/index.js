import {
    FETCHING_DATA_START,
    FETCHING_DATA_SUCCESS,
    FETCHING_DATA_FAILURE,

    SENDING_DATA_START,
    SENDING_DATA_SUCCESS,
    SENDING_DATA_FAILURE
  } from "../actions";
  
  const initialState = {
    dataSend: null, // <--- major blocker
    data: null,
    isFetching: false,
    error: ""
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCHING_DATA_START:
        return {
          ...state,
          isFetching: true,
          error: ""
        };
      case FETCHING_DATA_SUCCESS:
        return {
          ...state,
          isFetching: false,
          data: action.payload
        };
      case FETCHING_DATA_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: "Data did not fetch"
        }
      case SENDING_DATA_START:
        return {
          ...state,
          isFetching: true,
          error: ""
        };
      case SENDING_DATA_SUCCESS:
        return {
          ...state,
          isFetching: false,
          data: action.payload
        };
      case SENDING_DATA_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: "Data did not send"
        }
      default:
        return state;
    }
  };
  