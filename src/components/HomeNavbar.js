import React from 'react';
import PropTypes from 'prop-types';
import { GoSearch } from 'react-icons/go';

const HomeNavbar = (props) => {
  const {
    search,
    handleChange,
  } = props;

  return (
    <nav className="flex-box">
      <span className="nav-title">UK</span>
      <span className="nav-center">most cases</span>
      <form className="input-container flex-box" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search" className="flex-box">
          <input
            type="text"
            id="search"
            name="search"
            value={search}
            onChange={handleChange}
            placeholder="Search region"
          />
          <GoSearch />
        </label>
      </form>
    </nav>
  );
};

HomeNavbar.propTypes = {
  search: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default HomeNavbar;
