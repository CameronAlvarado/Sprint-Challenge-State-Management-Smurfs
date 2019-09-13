import {
    FETCHING_DATA_START,
    FETCHING_DATA_SUCCESS,
    FETCHING_DATA_FAILURE,

    SENDING_DATA_START,
    SENDING_DATA_SUCCESS
  } from "../actions";
  
  const initialState = {
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
      default:
        return state;
    }
  };
  