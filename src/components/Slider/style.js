import styled from "styled-components";

export const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border: 1px solid purple;
  width: 350px;
  height: 400px;
  position: relative;
  cursor: grab;

  .content {
    text-decoration: none;
   
    top: 50%;
  }

  img {
    transition: 1s;
    width: 300px;
    height: 180px;
    padding: 10px;
    -webkit-box-shadow: -1px 10px 9px 5px rgba(0, 0, 0, 0.44);
    box-shadow: -1px 10px 9px 5px rgba(0, 0, 0, 0.44);
  }

  img:hover {
    width: 350px;
    height: 200px;
    padding: 0px;
  }
  h2 {
    color: white;
    font-weight: 300;
  }

  section {
    overflow: auto;
    padding: 18px;

    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
    ::-webkit-scrollbar {
      width: 8px;
      background: transparent;
      cursor: pointer;
    }
    ::-webkit-scrollbar-thumb {
      background: purple;
    }
  }
  p {
    color: white;
  }
`;
