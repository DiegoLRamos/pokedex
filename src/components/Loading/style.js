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
    height: 150px;
    width: 150px;
    
    animation: ${rotate} 2s linear infinite;
  }
`;