/* @flow */
import Homepage from './Homepage';
import { connect } from 'react-redux';
import { toggleBookmark } from '../../actions/bookmark';

const mapStateToProps: mapStateToProps = state => {
  return {
    bookmarks: state.bookmarks
  };
};

const mapDispatchToProps: mapDispatchToProps = dispatch => {
  return {
    onBookmarkPress: id => {
      dispatch(toggleBookmark(id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
