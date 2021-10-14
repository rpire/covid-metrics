import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import HomeNavbar from '../components/HomeNavbar';
import Region from '../components/Region';

const Home = () => {
  const data = useSelector((state) => state.data);

  const [search, setSearch] = useState('');

  const handleChange = (event) => setSearch(event.target.value);

  const filteredRegions = data.regions.sort((a, b) => b.today_open_cases - a.today_open_cases)
    .filter((region) => region.name.toLowerCase()
      .includes(search.toLowerCase()));

  return (
    <>
      <HomeNavbar
        search={search}
        handleChange={handleChange}
      />
      <section className="main-container flex-box">
        <img
          src={`./media/${data.id}.png`}
          alt={`Map silhouette for ${data.name}`}
          className="main-img"
        />
        <div className="main-content flex-box">
          <h1>{data.name}</h1>
          <p>Confirmed cases</p>
          <span>{data.today_confirmed}</span>
        </div>
      </section>
      <section>
        <h2>STATS BY REGION</h2>
        <ul className="region-list">
          {filteredRegions.map((region) => (
            <li key={region.id}>
              <Link to={`/${region.id}`}>
                <Region
                  region={region}
                  id={filteredRegions.indexOf(region)}
                />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Home;
