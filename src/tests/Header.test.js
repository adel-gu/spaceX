import { render, screen } from '@testing-library/react';
import Header from '../components/Header/Header';
import { BrowserRouter } from 'react-router-dom';

test('Header component should render correctly', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  expect(screen).toMatchSnapshot();
});
