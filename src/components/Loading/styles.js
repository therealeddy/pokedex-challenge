import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
  display: block;
  width: 100%;
  svg {
    display: block;
    margin: 0 auto;
    width: 100px;
    animation: ${rotate} 0.7s linear infinite;
  }
`;
