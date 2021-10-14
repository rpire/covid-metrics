import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import DetailsNavbar from '../../components/DetailsNavbar';

test('Renders Correctly', () => {
  const props = 'test';

  render(
    <Router basename={process.env.PUBLIC_URL}>
      <DetailsNavbar name={props} />
    </Router> 
  );
  expect(screen).toMatchSnapshot();
});
