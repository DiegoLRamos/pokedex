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
  
  background: rgba(0, 0, 0, 0.8);
  z-index: 3;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);



  @media only screen and (min-width: 415px) and (max-width: 1023px){
    /* width: 80%; */
    /* max-width: 500px; */
    /* height: 80%; */
  }

  @media only screen and (min-width: 1024px){
    justify-content: center;
    align-items: center;
    /* width: 600px; */
    /* height: 600px; */
  }

`;



export const AreaModal = styled.div`
  background: ${ ({theme}) => theme.bgcModal };

  padding: 0px 10px;
  
  width: 100%;
  height: 100%;

  position: relative;
  
  .area{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    border: 1px solid red;
    
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

    .area-info{
      display: flex;
      flex-direction: column;
      align-items: center;

    }


    .area-status{
      padding: 5px;

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
            display:block;
            -webkit-appearance: none;
            /* width: 100px; */

          }

          progress::-webkit-progress-bar {
              background: #2B3151;
              height: 10px;
              /* border-radius: 50px; */
              padding: 2px;
          }

          progress::-moz-progress-bar {  
              background: black;
              /* border-radius: 50px; */
              /* padding: 2px; */
          }

          progress::-webkit-progress-value {
              /* border-radius: 50px; */
              background:orange;
          }

        }
      }
    }

  }


  .area-evolution{
    display: flex;
    flex-direction: column;

    margin-top: 20px;

    p{
      font-size: 1.2rem;
    }

    div{
      display: flex;
      justify-content: space-around;
      
      img{
        height: 100px;
        width: 100px;
      }
    }
  }




`;