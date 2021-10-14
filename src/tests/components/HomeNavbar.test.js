import React from 'react';
import { render, screen } from '@testing-library/react';
import HomeNavbar from '../../components/HomeNavbar';

test('Renders Correctly', () => {
  const { search, handleChange } = {
    search: 'test',
    handleChange: () =>{
      return 'test function'
    },
  };

  render(
    <HomeNavbar
      search={search}
      handleChange={handleChange}
    />
  );
  expect(screen).toMatchSnapshot();
});
