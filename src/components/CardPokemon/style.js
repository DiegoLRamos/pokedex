import styled from "styled-components";

export const CardContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 95%;
  margin-top: 30px;

  border-radius: 15px;
  box-shadow: 0px 0px 8px rgb(0, 0, 0, 50%);
 
  background:  ${ ({theme}) => theme.bgcCard };
  color: ${ ({theme}) => theme.colorFontCardDefault };
  
  text-transform: capitalize;
  overflow: hidden;


  @media only screen and (min-width: 415px) and (max-width: 1023px){
    width: 300px;
  }

  @media only screen and (min-width: 1024px){
    width: 300px;
  }
`;


export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  height: 100px;

  .types{
    display: flex;
    flex-direction: column;
    align-self: flex-start;

    list-style: none;
      
    padding: 10px;
    z-index: 2;
    
    li{
      display: flex;
      align-self: start;
      
      .icon-type{
        height: 25px;
      }

      + li {
        margin-top: 5px;
      }

      span{
        margin-left: 5px;  
      }
    }
  }
`;


export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100px;

  .img-pokemon{
    position: relative;
    top: 90px;

    width: 200px;
    height: 200px;
    z-index: 1;  
  }
    
  .img-pokeball{
    position: relative;
    top: -120px;
    height: 230px;
    border-radius: 50%;
    opacity: 0.2;
  }

`;


export const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px 0;


  .btn-skills{
    height: 50px;
    width: 90%;

    font-size: 1.5rem;

    margin-top: 15px;
    border: none;
    border-radius: 8px;

    background: ${ ({theme}) => theme.btnCard };
    color: ${ ({theme}) => theme.colorBtnCard};

    &:hover{
      opacity: 0.8;;
    }
  }
    
`;
