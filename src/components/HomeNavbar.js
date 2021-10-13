import React from 'react';
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
      <div className="input-container flex-box">
        <input
          type="text"
          id="search"
          name="search"
          value={search}
          onChange={handleChange}
          placeholder="Search country"
        />
        <label htmlFor="search">
          <GoSearch />
        </label>
      </div>
    </nav>
  );
};

export default HomeNavbar;
