import React from 'react';
import PropTypes from 'prop-types';
import { IoPersonSharp } from 'react-icons/io5';
import DetailsNavbar from '../components/DetailsNavbar';

const Details = (props) => {
  const {
    region: {
      id,
      name,
      today_confirmed: confirmed,
      today_new_confirmed: newConfirmed,
      today_deaths: deaths,
      today_new_deaths: newDeaths,
      today_open_cases: open,
      today_new_open_cases: newOpen,
      today_recovered: recovered,
      today_new_recovered: newRecovered,
    },
  } = props;

  return (
    <>
      <DetailsNavbar name={name} />
      <div className="main-container flex-box">
        <img
          src={`./media/${id}.png`}
          alt={`Map silhouette for ${name}`}
          className="main-img"
        />
        <div className="main-content flex-box">
          <h1>{name}</h1>
          <p>Confirmed cases</p>
          <span>{confirmed}</span>
        </div>
      </div>
      <h2>DETAILS</h2>
      <ul className="details-list">
        <li className="details-list-item flex-box even">
          <span>CONFIRMED CASES</span>
          <span className="counter flex-box">
            {confirmed}
            <IoPersonSharp />
          </span>
        </li>
        <li className="details-list-item flex-box odd">
          <span>NEW CONFIRMED CASES</span>
          <span className="counter flex-box">
            {newConfirmed}
            <IoPersonSharp />
          </span>
        </li>
        <li className="details-list-item flex-box even">
          <span>DEATHS</span>
          <span className="counter flex-box">
            {deaths}
            <IoPersonSharp />
          </span>
        </li>
        <li className="details-list-item flex-box odd">
          <span>NEW DEATHS</span>
          <span className="counter flex-box">
            {newDeaths}
            <IoPersonSharp />
          </span>
        </li>
        <li className="details-list-item flex-box even">
          <span>OPEN CASES</span>
          <span className="counter flex-box">
            {open}
            <IoPersonSharp />
          </span>
        </li>
        <li className="details-list-item flex-box odd">
          <span>NEW OPEN CASES</span>
          <span className="counter flex-box">
            {newOpen}
            <IoPersonSharp />
          </span>
        </li>
        <li className="details-list-item flex-box even">
          <span>RECOVERED</span>
          <span className="counter flex-box">
            {recovered}
            <IoPersonSharp />
          </span>
        </li>
        <li className="details-list-item flex-box odd">
          <span>NEW RECOVERED</span>
          <span className="counter flex-box">
            {newRecovered}
            <IoPersonSharp />
          </span>
        </li>
      </ul>
    </>
  );
};

Details.propTypes = {
  region: PropTypes.instanceOf(Object).isRequired,
};

export default Details;
