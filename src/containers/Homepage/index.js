/* @flow */
import Homepage from './Homepage';
import { connect } from 'react-redux';
import { toggleBookmark, fetchData } from '../../actions';

const mapStateToProps: mapStateToProps = state => {
  return {
    events: state.events,
    bookmarks: state.bookmarks
  };
};

const mapDispatchToProps: mapDispatchToProps = dispatch => {
  return {
    onBookmarkPress: id => {
      dispatch(toggleBookmark(id));
    },
    fetchEvents: () => {
      dispatch(fetchData());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
