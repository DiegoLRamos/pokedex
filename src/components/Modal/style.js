import styled from 'styled-components';

export const ContainerModal = styled.div`
  position: fixed;
  top: 0;

  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */

  padding: 10px;

  width: 100%;
  height: 100%;
  z-index: 3;

  background: yellowgreen;

  button{
    border: none;
    border-radius: 4px;
    /* background: transparent; */
    width: 50px;

    padding: 20px;

    align-self: flex-end;
  }


  .area{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    .area-info{
      display: flex;
      flex-direction: column;
      align-items: center;

      img{
        width: 150px;
        /* border: 1px solid white; */
      }
    }


    .area-status{
      padding: 20px;

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