import { render, screen } from '@testing-library/react';
// Component
import { Provider } from 'react-redux';
import Dragons from '../components/Dragons/Dragons';

// Sotre
import store from '../redux/configureStore';

// Actions
import {
  fetchDragons,
  reserveDragon,
  cancelReserveDragon,
} from '../redux/dragons/dragons';

// Dragon Reducers
import reducer from '../redux/dragons/dragons';

// Data
const dragon1 = {
  id: 1,
  name: 'dragon1',
  reserved: false,
};

const dragon2 = {
  id: 2,
  name: 'dragon2',
  reserved: false,
};

const dragons = [dragon1, dragon2];
const reservedDragon = [{ ...dragon1, reserved: true }, dragon2];

// Create Action for the exxtra reeducers
const fulfilledDragonsFetch = {
  type: fetchDragons.fulfilled,
  payload: dragons,
};

// TESTS
describe('Testing Dragons', () => {
  test('Component should render correctly', () => {
    render(
      <Provider store={store}>
        <Dragons />
      </Provider>,
    );
    expect(screen).toMatchSnapshot();
  });

  // Fetch the dragons
  test('Fetching dragons should return an array of data', () => {
    const dragons = reducer([], fulfilledDragonsFetch);
    expect(dragons).toHaveLength(2);
  });

  // Reserve dragon
  test('Reserve dragon should set reserved property to true', () => {
    const reservedDragon = reducer(dragons, reserveDragon(1));
    expect(reservedDragon[0].reserved).toBeTruthy();
  });

  // Cancel reservation
  test('Cancel reservation should set reserved property to false', () => {
    const CancelReservedDragon = reducer(
      reservedDragon,
      cancelReserveDragon(1),
    );
    expect(CancelReservedDragon[0].reserved).toBeFalsy();
  });
});
