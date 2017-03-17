import React, { PropTypes } from 'react';

const Hello = props => (
  <div>
    Hello {props.name}
  </div>
);

Hello.propTypes = {
  name: PropTypes.string,
};

Hello.defaultProps = {
  name: 'World',
};

export default Hello;
