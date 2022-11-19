import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import MyProfile from '../components/MyProfile/MyProfile';

describe('Rocket renders correctly', () => {
  test('Renders rockets Correctly', () => {
    const myProfile = render(
      <Provider store={store}>
        <Router>
          <MyProfile />
        </Router>
      </Provider>,
    );
    expect(myProfile).toMatchSnapshot();
  });
});
