import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import Missions from '../components/Missions/Missions';
import { fetchMissions, joinMission, leavingMission } from '../Redux/Missions/Missions';

describe('Missions renders correctly', () => {
  test('Renders missions Correctly', () => {
    const missions = render(
      <Provider store={store}>
        <Router>
          <Missions />
        </Router>
      </Provider>,
    );
    expect(missions).toMatchSnapshot();
  });
});

describe('Missions reducers', () => {
  it('should fetch missions', async () => {
    await store.dispatch(fetchMissions());
    expect(store.getState().missions.length).toEqual(10);
  });

  it('should reserve a missions', () => {
    store.dispatch(joinMission('9D1B7E0'));
    expect(store.getState().missions[0].reserved).toBe(true);
  });

  it('should cancel a reservation', () => {
    store.dispatch(leavingMission('9D1B7E0'));
    expect(store.getState().missions[0].reserved).toEqual(false);
  });
});
