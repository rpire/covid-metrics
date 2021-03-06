import React from 'react';
import PropTypes from 'prop-types';
import { FiArrowRightCircle } from 'react-icons/fi';

const Region = (props) => {
  const {
    region: {
      name,
      today_confirmed: confirmedCases,
      id: regionID,
    },
    id,
  } = props;

  const darkElements = [0, 3, 4, 7, 8];

  return (
    <div className={darkElements.includes(id) ? 'dark-region' : 'light-region'}>
      <div className="region-img-frame flex-box">
        <img
          src={process.env.PUBLIC_URL.concat(`/media/${regionID}.png`)}
          alt="Region map"
          className="region-img"
        />
        <FiArrowRightCircle className="details-link" />
      </div>
      <div className="region-content flex-box">
        <h3>{name}</h3>
        <p>Confirmed cases</p>
        <span>{confirmedCases}</span>
      </div>
    </div>
  );
};

Region.propTypes = {
  region: PropTypes.instanceOf(Object).isRequired,
  id: PropTypes.number.isRequired,
};

export default Region;
