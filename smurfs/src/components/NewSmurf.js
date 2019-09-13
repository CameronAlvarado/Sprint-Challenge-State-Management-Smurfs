import React from 'react';

import { connect } from 'react-redux';
import { sendData } from '../actions';
import { getData } from "../actions";
// import NewPost from './NewPost';

class NewSmurf extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            height: ''
          };
        };
  
    handleInputChange = e => {
      this.setState({
        [e.target.name]: e.target.value
      });
    };
  
    handleSubmit = e => {
      e.preventDefault();
      if (this.state.name.trim() && this.state.age.trim() && this.state.height.trim()) {
        this.props.onAddPost(this.state);
        this.props.onGetPost();
        this.handleReset();
      }
    };
  
    handleReset = () => {
      this.setState({
          name: '',
          age: '',
          height: ''
      });
    };
  
    render() {
      return (
        <div>
            <form onSubmit={ this.handleSubmit }>
            <div className="form-group">
                <input
                type="text"
                placeholder="Name"
                className="form-control"
                name="name"
                onChange={ this.handleInputChange }
                value={ this.state.name }
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Age"
                className="form-control"
                name="age"
                onChange={ this.handleInputChange }
                value={ this.state.age }>
              </input>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Height"
                className="form-control"
                name="height"
                onChange={ this.handleInputChange }
                value={ this.state.height }>
              </input>
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary" >Add Post</button>
              <button type="button" className="btn btn-warning" onClick={ this.handleReset }>
                Reset
              </button>
            </div>
          </form>
        </div>
      );
    }
  };
  

const mapDispatchToProps = dispatch => {
    return {
      onAddPost: post => {
        dispatch(sendData(post));
      },
      onGetPost: post => {
        dispatch(getData(post));
      }
    };
  };

export default connect(
    null,
    mapDispatchToProps
  )(NewSmurf);
  