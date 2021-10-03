import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

function Content({
  temp,
}) {
  return (
    <div className="content">
      Content
    </div>
  );
}

Content.propTypes = {
  temp: PropTypes.any,
};

Content.defaultProps = {
  temp: null,
};

export default Content;
