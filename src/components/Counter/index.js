import React from 'react';
import PropTypes from 'prop-types';
import { StyledCounter } from '../Components.styled';

const Counter = ({ current, total }) => (
  <StyledCounter>
    {current}/{total}
  </StyledCounter>
);

Counter.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
export default Counter;
