
This app simulates [ Hacker News ](https://news.ycombinator.com/) and plots a timeline chart for upvotes for each news feed item. 

### Functionalities provided
- upvote and hide functionalities and updates the timeline chart in real time.
- The updated state is cached using sessionStorage and changes persist on refreshing the page.
- The app uses hashRouter with pagination and bookmarkable pages.
- The app uses server side rendering using node express with client hydration.

### Tech stack used
- Create React App
- redux ,react-router-dom
- express for server side rendering
- jest and enzyme for test cases
- chartjs for chart creation

### Steps to run the app
yarn
yarn start

### To run test cases
yarn test
