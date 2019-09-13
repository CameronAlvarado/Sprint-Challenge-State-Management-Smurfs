import { connect } from 'react-redux';
import { sendData } from '../actions';
import NewPost from './NewPost';

const mapDispatchToProps = dispatch => {
    return {
      onAddPost: post => {
        dispatch(sendData(post));
      }
    };
  };

export default connect(
    null,
    mapDispatchToProps
  )(NewPost);
  