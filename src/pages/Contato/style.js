import styled from "styled-components";

export const ContatoStyle = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(0, #120c56, #000000);

  @media (max-width: 600px)
{
  .contatoTitle
   {
    font-size: 18px;
       padding: 20px;
       
   }
}

  .contatoTitle {
    color: white;
   
    font-weight: 100;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 0.5px solid purple;
    gap: 35px;
    border-radius: 20%;
    
  }

  .container {
    display: flex;
    flex-direction: column;
  }
  label {
    color: white;
    font-size: 18px;
    font-weight: 100;
  }
  input {
    width: 300px;
    height: 30px;
    font-size: 18px;
  }

  textarea {
    width: 300px;
    height: 100px;
  }

  button {
    width: 306px;
    height: 40px;
    background-color: blueviolet;
    border: none;
    color: white;
    cursor: pointer;
    margin-bottom: 10%;
    &:hover {
      transition: 0.7s;
      background-color: purple;
      color: white;
      box-shadow: 0 0 50px purple;
    }
  }
`;
