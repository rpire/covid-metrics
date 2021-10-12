import React from 'react';
import PropTypes from 'prop-types';

const Details = (props) => {
  const msg = 'Welcome';
  const {
    region: {
      name,
      today_open_cases: openCases,
    },
  } = props;

  return (
    <>
      <h1>{`This is the details page for ${name}`}</h1>
      <p>{msg}</p>
      <p>Today open Cases: </p>
      <span>{openCases}</span>
    </>
  );
};

Details.propTypes = {
  region: PropTypes.instanceOf(Object).isRequired,
};

export default Details;
