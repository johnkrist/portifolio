import styled from "styled-components";

export const SobreStyle = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(0, #120c56, #000000);

 .minhaImg{
    width: 500px;
    margin-left: 4%;
    float: left;
    border: 0.5px solid purple;
  }
  @media (max-width: 600px)
{
  .minhaImg
   {
    width: 250px;
    float: none;
   }
   .mobile{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    gap: 15px;
   
   }
   .mobile p{
    margin: 0;
    line-height: 20px;
   }
   .mobile .title{
    margin: 0;
   }

}

  .title{
    margin-left: 50%;
    color: white;
    font-weight: 100;
  }
  p{
    margin: 0 5% 10% 50% ;
    color: white;
    font-weight: 100;
    line-height: 30px;
  }
`;

export const SectionStacks = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  height: 20%;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 80px;
    
  }
  h3 {
    font-weight: 100;
    color: white;
  }
`;
