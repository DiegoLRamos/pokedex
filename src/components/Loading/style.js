import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const ContainerLoading = styled.div`
  img{
    animation: ${rotate} 2s linear infinite;
    height: 300px;
    width: 300px;
  }
`;