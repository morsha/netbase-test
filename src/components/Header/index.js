import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

function Header({
  temp,
}) {
  return (
    <header className="header">
      CARD
    </header>
  );
}

Header.propTypes = {
  temp: PropTypes.any,
};

Header.defaultProps = {
  temp: null,
};

export default Header;
