
import React from 'react';
import styles from './feedItem.module.sass';
import { timeElapsed } from 'utils/helpers';
import SortArrowUp from 'assets/sort-up-arrow.png';

class FeedItem extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {

        }
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
                    {timeElapsed((new Date()).getTime(), this.props.newsData.get('created_at_i'))}
                    &nbsp;[&nbsp;
                </span>

                <span className={styles["hide-action"]}>
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
                    />
                </div>
                {this.getNewsDetails()}
            </div>
        );
        return FeedItem;
    }

}

export default FeedItem;