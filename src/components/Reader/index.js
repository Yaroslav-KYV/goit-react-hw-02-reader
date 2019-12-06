import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from '../Controls';
import Counter from '../Counter';
import Publication from '../Publication';
import { StyledReader, StyledControls } from '../Components.styled';

export default class Reader extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  };

  state = {
    index: this.props.items.length / 2 - 1,
  };

  clickNext = () => {
    this.setState(state => {
      return {
        index: state.index + 1,
      };
    });
  };

  clickPrev = () => {
    this.setState(state => {
      return {
        index: state.index - 1,
      };
    });
  };

  render() {
    const { index } = this.state;
    const { items } = this.props;
    const { title, text } = items[index];
    return (
      <StyledReader>
        <StyledControls>
          <Controls
            clickBtn={this.clickPrev}
            name="Prev"
            disable={index === 0}
          />
          <Controls
            clickBtn={this.clickNext}
            name="Next"
            disable={items.length === index + 1}
          />
        </StyledControls>
        <Counter current={index + 1} total={items.length} />
        <Publication index={index + 2} title={title} text={text} />
      </StyledReader>
    );
  }
}
