import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
  const data = useSelector((state) => state.data);

  return (
    <>
      <h1>{data.name}</h1>
      <p>Open cases today: </p>
      <span>{data.today_open_cases}</span>
      <h2>Regions:</h2>
      <ul>
        {data.regions.map((region) => (
          <li key={region.id}>
            <Link to={`/${region.id}`}>
              {region.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
