import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import CategoryFilter from './CategoryFilter';
import { changeFilter } from '../actions/index';
import { Link } from 'react-router-dom';

const Navbar = ({ changeCat }) => {
  const changeCategory = e => {
    changeCat(e.target.value);
  };

  return (
    <>
      <header>
        <nav className="p-100 nav pos-rel flex">
          <h1 className="title pointer">
            <Link to="/">Bookstore CMS</Link>
          </h1>
          <div className="right-cont align-c flex">
            <Link to="/"><p className="book-header-title pointer">Books</p></Link>
            <CategoryFilter handleFilter={changeCategory} />
          </div>
          <div className="prof pointer flex align-c just-c">
            <Link to="/login"><FontAwesomeIcon icon={faUser} /></Link>
          </div>
        </nav>
      </header>
    </>
  );
};

Navbar.propTypes = {
  changeCat: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  changeCat: category => dispatch(changeFilter(category)),
});

export default connect(null, mapDispatchToProps)(Navbar);
