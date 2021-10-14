import React from 'react';
import { render, screen } from '@testing-library/react';
import Region from '../../components/Region';

test('Renders Correctly', () => {
  const { region, id } = {
    region: {
      name: 'test',
      today_confirmed: 0,
      id: 'test id'
    },
    id: 5,
  };

  render(
    <Region
      region={region}
      id={id}
    />
  );
  expect(screen).toMatchSnapshot();
});