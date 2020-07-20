
This app simulates [ Hacker News ](https://news.ycombinator.com/) and plots a timeline chart for upvotes for each news feed item. 

### Functionalities provided
- upvote and hide functionalities and updates the timeline chart in real time.
- The updated state is cached using sessionStorage and changes persist on refreshing the page.
- The app uses hashRouter with pagination and bookmarkable pages.
- The app uses server side rendering using node express with client hydration.
- Has highly responsive User interface, works fine with web, tablet and mobile views.

### Tech stack used
- Create React App
- redux ,react-router-dom
- express for server side rendering
- jest and enzyme for test cases
- chartjs for chart creation

### App screenshots
#### home page
![home page ](https://github.com/neerajtomar98/hacker-news-app/blob/master/homepage.png?raw=true)
#### upvote timeline chart 
![upvote timeline chart ](https://github.com/neerajtomar98/hacker-news-app/blob/master/upVotetimelineChart.png?raw=true)
#### updated route with page number
![updated route with page number ](https://github.com/neerajtomar98/hacker-news-app/blob/master/newRouteWithpage.png?raw=true)


### Steps to run the app
yarn
yarn start

### To run test cases
yarn test
