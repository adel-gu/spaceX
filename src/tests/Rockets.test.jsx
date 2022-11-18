import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import Rockets from '../components/Rockets/Rockets';
import { fetchRockets, rocketBooking, rocketCancelation } from '../Redux/rockets/rockets';

describe('Rocket renders correctly', () => {
  test('Renders rockets Correctly', () => {
    const rocket = render(
      <Provider store={store}>
        <Router>
          <Rockets />
        </Router>
      </Provider>,
    );
    expect(rocket).toMatchSnapshot();
  });
});

describe('Rocket reducers', () => {
  it('should fetch rockets', async () => {
    await store.dispatch(fetchRockets());
    expect(store.getState().rockets.length).toEqual(4);
  });

  it('should reserve a rocket', () => {
    store.dispatch(rocketBooking(1));
    expect(store.getState().rockets[0].reserved).toBe(true);
  });

  it('should cancel a reservation', () => {
    store.dispatch(rocketCancelation(1));
    expect(store.getState().rockets[0].reserved).toEqual(false);
  });
});
