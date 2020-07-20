import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import App from './App'
import mockStore from './utils/mockStoreUtil';

const mockState = {
    newsFeed: {
        feedItems: [],
        isFetching: false,
        error: null,
        page: 0,
        totalPages: 0
    }
};

const store = mockStore(mockState);

describe('App', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<App store={store} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})