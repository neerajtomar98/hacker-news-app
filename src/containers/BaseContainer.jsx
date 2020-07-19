import React from 'react';
import { connect } from 'react-redux';
import {
    fetchNewsFeed,
    onHideNews,
    onUpVoteNews,
    goToNextPage,
    goToPreviousPage
} from 'actions/actions';
import Feed from 'components/feed/Feed';

class BaseContainer extends React.PureComponent {

    componentDidMount() {
        this.props.fetchNewsFeed();
    }

    render() {
        return (
            <Feed {...this.props} />
        );
    }
}
const mapStateToProps = state => ({
    newsFeed: state.get('newsFeed')
})

const mapDispatchToProps = dispatch => ({
    fetchNewsFeed: () => dispatch(fetchNewsFeed()),
    onHideNews: (newsItemId) => dispatch(onHideNews(newsItemId)),
    onUpVoteNews: (newsItemId) => dispatch(onUpVoteNews(newsItemId)),
    goToPreviousPage: () => dispatch(goToPreviousPage()),
    goToNextPage: () => dispatch(goToNextPage())


})

export default connect(mapStateToProps, mapDispatchToProps)(BaseContainer);