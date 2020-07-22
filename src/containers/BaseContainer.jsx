import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import {
    fetchNewsFeed,
    onHideNews,
    onUpVoteNews,
    goToNextPage,
    goToPreviousPage,
    updateRouteDataToStore
} from '../actions/actions';
import Feed from 'components/feed/Feed';
import { getQueryParamsObjectFromQueryString } from "utils/routeHelpers";

class BaseContainer extends React.PureComponent {

    componentDidMount() {
        this.props.fetchNewsFeed(this.props.location.search);
    }

    componentDidUpdate(prevProps) {
        let prevSearchParams = getQueryParamsObjectFromQueryString(prevProps.location.search);
        let currentSearchParams = getQueryParamsObjectFromQueryString(this.props.location.search);
        if (
            prevSearchParams.page !== currentSearchParams.page
        ) {
            this.props.updateRouteDataToStore(this.props.location.search);
            this.props.fetchNewsFeed(this.props.location.search);
        }
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
    fetchNewsFeed: (queryParamsString) => dispatch(fetchNewsFeed(queryParamsString)),
    onHideNews: (newsItemId) => dispatch(onHideNews(newsItemId)),
    onUpVoteNews: (newsItemId) => dispatch(onUpVoteNews(newsItemId)),
    goToPreviousPage: () => dispatch(goToPreviousPage()),
    goToNextPage: () => dispatch(goToNextPage()),
    updateRouteDataToStore: (queryParamsString) => dispatch(updateRouteDataToStore(queryParamsString))
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(BaseContainer));

BaseContainer.fetchNewsFeed = fetchNewsFeed;
export { BaseContainer };