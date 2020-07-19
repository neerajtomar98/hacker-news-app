import React from 'react';
import { connect } from 'react-redux';
import { fetchNewsFeed, onHideNews, onUpVoteNews } from 'actions/actions';
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
    onUpVoteNews: (newsItemId) => dispatch(onUpVoteNews(newsItemId))
})

export default connect(mapStateToProps, mapDispatchToProps)(BaseContainer);