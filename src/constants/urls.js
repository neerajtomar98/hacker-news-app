import Immutable from 'immutable';

const urls = Immutable.Map({
    FETCH_NEWS_FEED_ITEMS: `https://hn.algolia.com/api/v1/search?tags=front_page`
});

export default urls;