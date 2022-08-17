import styled from "styled-components";

export const HeaderStyle = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    width: 100%;

    display: flex;
    justify-content: center;
    gap: 5%;

    .social {
      display: flex;
    }
  }
  a {
    text-decoration: none;
    color: white;
    transform: translateY(-6px);
    border-bottom: 2px solid purple;
    &:hover {
    }
  }

  .menu {
    text-decoration: none;
    color: white;
    border-bottom: 2px solid purple;
    padding-bottom: 8px;

    &:hover {
      animation: a 1s linear infinite;
    }
    @keyframes a {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0.1;
      }
      100% {
        opacity: 1;
      }
    }
  }

  h1 {
    color: white;
    margin: 5%;
    font-family: "Josefin Slab";
    border-bottom: 2px solid purple;
    padding-bottom: 8px;
    cursor: pointer;
  }
`;
