import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './inputcount.scss';

function InputCount({ id, name, caption, className, ...rest }) {
  return (
    <div className={cn('f-count', className)} {...rest}>
      <label className="count--label" htmlFor={id}>
        {name}
        <small>{caption}</small>
      </label>
      <div className="count--number">
        <button type="button" className="count--number--button">
          {/* <FontAwesomeIcon icon={faMinus} /> */}
        </button>
        <input type="number" className="count--number--button" />
        <button type="button" className="count--number--button">
          {/* <FontAwesomeIcon icon={faPlus} /> */}
        </button>
      </div>
    </div>
  );
}

InputCount.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
};

InputCount.defaultProps = {
  className: 'cc',
  name: 'Adults',
  id: '12+ years',
};

export default InputCount;
