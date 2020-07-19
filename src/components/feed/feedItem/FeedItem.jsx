
import React from 'react';
import styles from './feedItem.module.sass';
import { timeElapsedSince } from 'utils/helpers';
import SortArrowUp from 'assets/sort-up-arrow.png';

class FeedItem extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    onHideNews = (event) => {
        this.props.onHideNews(this.props.newsData.get('objectID'));
    }

    onUpVoteNews = (event) => {
        this.props.onUpVoteNews(this.props.newsData.get('objectID'));
    }

    getNewsDetails = () => {
        const newsDetails = (
            <div className={styles["news-details"]}>
                <span className={styles["title"]}>
                    {this.props.newsData.get('title')}
                </span>
                &nbsp;
                <span className={styles["url"]}>
                    {"("} {this.props.newsData.get('url')} {") by "}
                </span>
                <span className={styles["author"]}>
                    {this.props.newsData.get('author')}
                </span>
                &nbsp;
                <span className={styles["time-elapsed"]}>
                    {timeElapsedSince(this.props.newsData.get('created_at_i'))}
                    &nbsp;[&nbsp;
                </span>

                <span
                    className={styles["hide-action"]}
                    onClick={this.onHideNews}>
                    hide
                 </span>
                <span className={styles['url']}>
                    &nbsp;]&nbsp;
                    </span>
            </div>
        );
        return newsDetails;
    }


    render() {
        const FeedItem = (
            <div className={styles["feed-item-content"]}>
                <div>
                    {this.props.newsData.get('num_comments')}
                </div>
                <div>
                    {this.props.newsData.get('points')}
                </div>
                <div>
                    <img
                        className={styles['upvote-image']}
                        src={SortArrowUp}
                        alt="upvote-image"
                        onClick={this.onUpVoteNews}
                    />
                </div>
                {this.getNewsDetails()}
            </div>
        );
        return FeedItem;
    }

}

export default FeedItem;