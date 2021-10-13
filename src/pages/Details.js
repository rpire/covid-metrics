import React from 'react';
import PropTypes from 'prop-types';
import DetailsNavbar from '../components/DetailsNavbar';

const Details = (props) => {
  const msg = 'Welcome';
  const {
    region: {
      id,
      name,
      today_open_cases: openCases,
    },
  } = props;

  console.log(name);

  return (
    <>
      <DetailsNavbar name={name} />
      <h1>{`This is the details page for ${name}`}</h1>
      <p>{msg}</p>
      <p>Today open Cases: </p>
      <span>{openCases}</span><br />
      <img src={`./media/${id}.png`} alt={`Silhoutte of ${name}`} />
    </>
  );
};

Details.propTypes = {
  region: PropTypes.instanceOf(Object).isRequired,
};

export default Details;
