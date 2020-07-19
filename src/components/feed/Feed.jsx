
import React from 'react';
import styles from './feed.module.sass';
import FeedItem from './feedItem/FeedItem';
import { ReactComponent as Loader } from 'assets/loader.svg';
import Pagination from '../pagination/Pagination';

class Feed extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    renderHeader = () => {
        return (
            <div className={styles["feed-header"]} >
                <div>
                    Comments
                </div>
                <div>
                    Vote Count
                </div>
                <div>
                    UpVote
                </div>
                <div>
                    News Details
                </div>
            </div >
        )
    }

    renderNewsFeeds = () => {
        if (this.props.newsFeed.get('isFetching')) {
            return (
                <div className={styles['loader-container']}>
                    <div className={styles["loader-icon"]}><Loader /></div>
                </div>);
        }

        let newsList = [];
        let feedItems = this.props.newsFeed.get('feedItems');

        feedItems.forEach(item => {
            newsList.push(
                <FeedItem
                    key={item.get('objectID')}
                    newsData={item}
                    onHideNews={this.props.onHideNews}
                    onUpVoteNews={this.props.onUpVoteNews}
                />
            );
        });

        newsList.push(
            <Pagination
                key="prev-next"
                goToPreviousPage={this.props.goToPreviousPage}
                goToNextPage={this.props.goToNextPage}
            />
        );

        return <div className={styles['news-feed-items']}>{newsList}</div>;
    }

    render() {
        const feed = (
            <div className={styles["news-feed-container"]}>
                <div className={styles["news-feed-content"]}>
                    {this.renderHeader()}
                    {this.renderNewsFeeds()}
                </div>
            </div>
        );
        return feed;
    }

}

export default Feed;