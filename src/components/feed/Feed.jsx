
import React from 'react';
import styles from './feed.module.sass';
import FeedItem from './feedItem/FeedItem';

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
                    <strong> Comments</strong>
                </div>
                <div>
                    <strong> Vote Count</strong>
                </div>
                <div>
                    <strong> UpVote</strong>
                </div>
                <div>
                    <strong> News Details</strong>
                </div>
            </div >
        )
    }

    renderNewsFeeds = () => {
        let newsList = [];
        let feedItems = this.props.newsFeed.get('feedItems');

        feedItems.forEach(item => {
            newsList.push(
                <FeedItem
                    key={item.get('objectID')}
                    newsData={item}
                />
            );
        });

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