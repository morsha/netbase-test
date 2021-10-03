import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

function PercentageDisplay({
  count,
}) {
  return (
    <div className="percentage-display">
      <div
        className="percentage-display__bar"
        style={{ width: `${count}%` }}
      />
      <span className="percentage-display__text">
        {count}
        %
      </span>
    </div>
  );
}

PercentageDisplay.propTypes = {
  count: PropTypes.number.isRequired,
};

export default PercentageDisplay;
