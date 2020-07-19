
import React from 'react';
import styles from './feedItem.module.sass';
import { timeElapsedSince } from 'utils/helpers';
import SortArrowUp from 'assets/sort-up-arrow.png';
import { getBaseUrl } from 'utils/helpers';

const getNewsDetails = (props) => {
    const newsDetails = (
        <div className={styles["news-details"]}>
            <a className={styles["title"]} href={props.newsData.get('url')} >
                {props.newsData.get('title')}
            </a>
            &nbsp;
            {props.newsData.get('url') ?
                <span className={styles["url"]}>
                    {"("} {getBaseUrl(props.newsData.get('url'), false)} {") by "}
                </span>
                : null
            }
            <span className={styles['url']}>
                &nbsp;by&nbsp;
                </span>
            <span className={styles["author"]}>
                {props.newsData.get('author')}
            </span>
            &nbsp;
            <span className={styles["time-elapsed"]}>
                {timeElapsedSince(props.newsData.get('created_at_i'))}
                &nbsp;[&nbsp;
            </span>

            <span
                className={styles["hide-action"]}
                onClick={(event) => props.onHideNews(props.newsData.get('objectID'))}>
                hide
             </span>
            <span className={styles['url']}>
                &nbsp;]&nbsp;
                </span>
        </div>
    );
    return newsDetails;
}


const FeedItem = (props) => {


    const FeedItem = (
        <div className={styles["feed-item-content"]}>
            <div label="number of comments">
                {props.newsData.get('num_comments')}
            </div>
            <div label="number of points">
                {props.newsData.get('points')}
            </div>
            <div>
                <img
                    className={styles['upvote-image']}
                    src={SortArrowUp}
                    label="upvote-image"
                    onClick={(event) => props.onUpVoteNews(props.newsData.get('objectID'))}
                    alt="upvote-button"
                />
            </div>
            {getNewsDetails(props)}
        </div>);
    return FeedItem;
}

export default FeedItem;