import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

function Footer({
  temp,
}) {
  return (
    <footer className="footer">
      FOOTER
    </footer>
  );
}

Footer.propTypes = {
  temp: PropTypes.any,
};

Footer.defaultProps = {
  temp: null,
};

export default Footer;
