/* @flow */
import EventDetail from './EventDetail';
import { connect } from 'react-redux';
import { toggleBookmark, addPositiveEvent } from '../../actions';

const mapStateToProps: mapStateToProps = state => {
  return {
    bookmarks: state.bookmarks
  };
};

const mapDispatchToProps: mapDispatchToProps = dispatch => {
  return {
    onBookmarkPress: id => {
      dispatch(toggleBookmark(id));
      dispatch(addPositiveEvent());
    },
    onOpenSource: () => {
      dispatch(addPositiveEvent());
    },
    onAddToCalendar: () => {
      dispatch(addPositiveEvent());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventDetail);
