import React from 'react';
import PropTypes from 'prop-types';
import { StyledPublication, H2, P } from '../Components.styled';

const Publication = ({ index, title, text }) => (
  <>
    <StyledPublication>
      <H2>
        {index - 1}.{title}
      </H2>
      <P>{text}</P>
    </StyledPublication>
  </>
);

Publication.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Publication;
