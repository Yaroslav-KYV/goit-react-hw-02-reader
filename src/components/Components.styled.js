import styled from 'styled-components';

export const StyledReader = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const StyledPublication = styled.article`
  padding: 24px;
  border: 1px none #e6ecf1;
  border-radius: 2px;
  background-color: #fff;
  box-shadow: 0 6px 28px 0 rgba(24, 52, 117, 0.2);
`;

export const H2 = styled.h2`
  font-weight: 500;
`;

export const P = styled.p`
  font-weight: 300;
  line-height: 1.5;
`;

export const StyledCounter = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 24px;
  margin-bottom: 16px;
`;

export const StyledControls = styled.section`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  margin-bottom: 16px;
`;

export const StyledButton = styled.button`
  display: inline-block;
  min-width: 240px;
  border: 0;
  padding: 8px 16px;
  margin-left: 4px;
  margin-right: 4px;
  border-radius: 3px;
  background-color: #3884ff;
  transition: all 200ms ease;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  font-style: normal;
  text-align: center;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  :hover,
  :focus {
    background-color: #1f65d6;
  }

  :disabled {
    pointer-events: none;
    background-color: #bdbdbd;
  }
`;
