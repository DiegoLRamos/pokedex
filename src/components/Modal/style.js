import styled from 'styled-components';

export const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  
  text-transform: capitalize;
  color: white;
  
  background: rgba(0, 0, 0, 0.7);
  z-index: 3;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;


export const AreaModal = styled.div`
  background: ${ ({theme}) => theme.bgcModal };

  width: 100%;
  height: 100%;
  padding: 20px;

  position: relative;

  .area{

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;

    margin-top: 50px;

    button{
      position: absolute;
      top: 10px;
      right: 10px;

      border: none;
      border-radius: 50%;

      img{
        height: 40px;
      }

    }


  }

  @media only screen and (min-width: 415px){
    max-width: 500px;
    max-height: 500px;

    border-radius: 10px;

    .area{
      flex-wrap: nowrap;
    }
  }

`;


export const AreaImages = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;


export const AreaStatus = styled.div`
  padding: 0 5px;

  p{
    font-size: 1.2rem;
  }

  ul{
    list-style: none;

    li{
      label{
        font-size: .8rem;
      }

      progress {
        display: block;
        -webkit-appearance: none;
      }

      progress::-webkit-progress-bar {
        background: ${ ({theme}) => theme.bgcStatus };
        height: 10px;
        padding: 2px;
      }

      progress::-webkit-progress-value {
        background: orange;
      }
    }
  }
`;