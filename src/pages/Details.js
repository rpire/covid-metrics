import React from 'react';

const Details = (props) => {
  const msg = 'Welcome';
  console.log(props);

  return (
    <>
      <h1>{`This is the details page for ${props.region.name}`}</h1>
      <p>{msg}</p>
      <p>Today open Cases: </p>
      <span>{props.region.today_open_cases}</span>
    </>
  );
};

export default Details;