import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { CgMenuGridR } from 'react-icons/cg';

const DetailsNavbar = (props) => {
  const { name } = props;

  return (
    <nav>
      <Link to="/">
        <MdOutlineKeyboardArrowLeft />
      </Link>
      <span>
        {`${name} metrics`}
      </span>
      <button type="button">
        <CgMenuGridR />
      </button>
    </nav>
  );
};

DetailsNavbar.propTypes = {
  name: PropTypes.string.isRequired,
};

export default DetailsNavbar;
