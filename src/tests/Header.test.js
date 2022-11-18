import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header/Header';

test('Header component should render correctly', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>,
  );
  expect(screen).toMatchSnapshot();
});
