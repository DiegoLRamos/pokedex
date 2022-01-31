import styled from "styled-components";

export const CardContainer = styled.li`
  display: flex;
  flex-direction: column;

  background: #343E63;
  width: 95%;
  text-transform: capitalize;

  & + li {
    margin-top: 10px;
  }

  .btn-skills{
    height: 50px;
    width: 200px;

    align-self: center;
    font-size: 1.5rem;

    margin: 20px 0;
    border: none;
    border-radius: 8px;

    background: orange;
    color: #FFFFFF;
    cursor: pointer;

    &:hover{
      opacity: 0.8;;
    }
  }


  @media only screen and (min-width: 560px) and (max-width: 1023px){
    width: 280px;

    .btn-skills{
      width: 90%;
    }
  }

  @media only screen and (min-width: 1024px){
    width: 300px;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  height: 300px;

  .img-pokemon{
    height: 200px;
    z-index: 1;    
  }
    
  .img-pokeball{
    position: relative;
    top: -220px;
    
    opacity: 0.3;
    filter: blur(3px);
  }

  @media only screen and (min-width: 560px) and (max-width: 1023px){
    .img-pokeball{
      width: 250px;
    }
  }

  @media only screen and (min-width: 1024px){
    height: 200px;

    .img-pokemon{
      height: 150px;
    }

    .img-pokeball{
      top: -200px;
      width: 250px;
    }
  }

`;

export const Types = styled.ul`
  height: 60px;
  list-style: none;
    
  display: flex;
  flex-direction: column;
    
  width: 100%;
  padding: 10px;

  li{
    display: flex;
    align-self: start;
    justify-content: center;

    .icon-type{
      height: 25px;
    }

    + li{
      margin-top: 5px;
    }

    span{
      margin-left: 5px;  
    }
  }
`;

export const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    padding: 10px 0;

  @media(max-width: 768px){

  }
`;



// export const Card = styled.li`
//   border: 1px solid #FFFFFF;
//   list-style: none;

//   display: flex;
//   flex-direction: column;
//   /* align-items: flex-start; */

//   background: #343E63;

//   height: 250px;
//   text-transform: capitalize;

//   & + li {
//     margin-top: 10px;
//   }


//   label{
//     font-size: .8rem;
//   }

//   progress {
//     display:block;
//     -webkit-appearance: none;
//   }

//   progress::-webkit-progress-bar {
//       background: #2B3151;
//       height: 10px;
//       /* border-radius: 50px; */
//       padding: 2px;
//   }
//   progress::-moz-progress-bar {  
//       background: black;
//       /* border-radius: 50px; */
//       /* padding: 2px; */
//   }

//   progress::-webkit-progress-value {
//       /* border-radius: 50px; */
//       background:orange;
//   }

// `;


// export const CardHeader = styled.div`
//   /* position: relative; */
//   /* top: -50px; */

//   border: 1px solid red;

//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   .img-pokemon{
//     height: 150px;
//     width: 150px;
//     z-index: 1;
//   }

//   .img-pokeball{
//     position: relative;
//     top: -120px;
//     /* transform: rotate(-30deg); */
//     opacity: 0.3;
//     height: 120px;
//     width: 120px;
//   }
// `;


// export const CardBody = styled.div`
//   border-top-left-radius: 10px;
//   border-top-right-radius: 10px;




//   border: 5px solid yellow;
//   background: transparent;
//   height: 250px;

//   z-index: 10;

//   /* position: relative; */
//   /* top: -300px; */

//   .icon-type {
//       height: 25px;
//   }

//   ul{
//     display: flex;
//     justify-content: center;
//     align-items: center;

//     list-style: none;

//     li {
//       margin-right: 5px;
//     }
//   }

// `;

// export const CardFooter = styled.div`
//   /* border: 1px solid #FFFFFF; */
// `;



// 320
// 768
// 1024
// 1440