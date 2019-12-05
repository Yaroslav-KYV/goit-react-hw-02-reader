import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from '../Components.styled';

const Controls = ({ name, clickBtn, disable }) => (
  <StyledButton
    onClick={clickBtn}
    type="button"
    disabled={!!disable}
    name={name}
  >
    {name}
  </StyledButton>
);

Controls.propTypes = PropTypes.shape({
  name: PropTypes.string.isRequired,
  next: PropTypes.func.isRequired,
  clickBtn: PropTypes.func.isRequired,
}).isRequired;

export default Controls;
