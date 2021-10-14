import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';

const DetailsNavbar = (props) => {
  const { name } = props;

  return (
    <nav className="flex-box">
      <Link to="/">
        <MdOutlineKeyboardArrowLeft className="nav-return" />
      </Link>
      <span className="nav-end">
        {`${name} metrics`}
      </span>
    </nav>
  );
};

DetailsNavbar.propTypes = {
  name: PropTypes.string.isRequired,
};

export default DetailsNavbar;
