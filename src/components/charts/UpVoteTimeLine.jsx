import React from 'react';
import styles from "./upVoteTimeLine.module.sass";
import { Line } from 'react-chartjs-2';
import { ReactComponent as Loader } from 'assets/loader.svg';

const getNewsFeedData = (props) => {
    let chartData = [];
    let newFeedItems = props.newsFeed.get('feedItems');
    newFeedItems.forEach(item => {
        let dataObj = {};
        dataObj[item.get('objectID')] = item.get('points');
        chartData.push(dataObj);
    });
    return chartData;
}

const getChartOptions = () => {

    let chartOptions = {
        title: {
            display: false,
        },
        legend: {
            display: false,
        },
        scales: {
            yAxes: [
                {
                    gridLines: {
                        lineWidth: 2,
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Votes',
                        fontSize: 20,
                        fontStyle: 'bolder'
                    }

                },

            ],

            xAxes: [
                {
                    gridLines: {
                        display: false,
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'ID',
                        fontSize: 20,
                        fontStyle: 'bolder'
                    }

                },
            ],

        },
    }

    return chartOptions;
}


const getChartData = (props) => {
    let chartData = getNewsFeedData(props);
    let yAxesData = chartData.map(item => Object.keys(item)).flat();
    let xAxesData = chartData.map(item => Object.values(item)).flat();

    const data = {
        labels: yAxesData,
        datasets: [
            {
                label: 'Votes ',
                fill: false,
                lineTension: 0,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: '#2980B9',//'rgb(26, 13, 171)',
                borderWidth: 3,
                data: xAxesData,
            }
        ]
    }
    return data;
}

const UpVoteTimeLine = (props) => {
    if (props.newsFeed.get('isFetching')) {
        return (
            <div className={styles['loader-container']}>
                <div className={styles["loader-icon"]}><Loader /></div>
            </div>);
    }

    return (
        <div className={styles["upvote-timeline-container"]}>
            <Line
                data={getChartData(props)}
                options={getChartOptions()}
            />
        </div>
    );
}

export default UpVoteTimeLine;