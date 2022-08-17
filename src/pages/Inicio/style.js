import styled from "styled-components";

export const InicioStyle = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(0, #120c56, #000000);
 
 
  .container {


    display: inline-flex;
    margin-left: 5%;
  
  }
  .container .estatico {
    color: purple;

    font-size: 30px;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    font-weight: 100;
  }
  .container .dinamico {
    line-height: 45px;
    height: 45px;
    overflow: hidden;
  }
  .dinamico li {
    color: white;
    list-style: none;
    font-size: 30px;
    top: 0;
    left: 0;
    position: relative;
    animation: slide 10s steps(4) infinite;
  }
  @keyframes slide {
100%{
  top: -180px;
}
    
  }
  .dinamico li span::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    border-left: 2px solid white;
    animation: typing 2.5s steps(15) infinite;
    background-color: #06041a;
  }
  .dinamico li span {
    position: relative;
    font-weight: 100;
  }
  @keyframes typing {
    100% {
      left: 100%;
      margin: 0 -17.5px 0 17.5px;
    }
  }
`;
export const Stars = styled.div`

  width: 2px;
  height: 2px;
  border-radius: 50%;
  box-shadow: 500px 70px white, 900px 80px white, 800px 700px white,
    900px 280px white, 750px 630px white, 600px 340px white, 450px 500px white,
    320px 200px white, 320px 20px white;

  animation: anim-stars 30s linear infinite alternate;

  @keyframes anim-stars {
    from {
      transform: translateY(20px);
    }
    to {
      transform: translateY(-180px);
    }
  }
`;

export const BigStars = styled.div`
  width: 3px;
  height: 3px;
  border-radius: 50%;
 

  box-shadow: 900px 300px white, 800px 40px white, 50px 200px white,
    400px 480px white, 900px 180px white, 500px 110px white, 700px 20px white;

  animation: ligth-bigstars 30s linear infinite alternate;

  @keyframes ligth-bigstars {
    0% {
      opacity: 1;
      transform: translateY(-80px);
    }
    25% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    75% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateY(40px);
    }
  }
  `;

export const Astronauta = styled.img`
  width: 200px;
  height: 200px;
  margin: auto 60%;
  animation: astroFly 10s linear infinite;
  border: 0.5px solid purple;
  cursor: pointer;
  &:hover{
    animation-play-state:paused;
  }
  @keyframes astroFly {
    0% {
      transform: translateY(10px);
    }
    50% {
      transform: translateY(-50px);
    }
    100% {
      transform: translateY(10px);
    }
  }
`;

export const Lua = styled.div`
  background-color: wheat;
  position: relative;
  border-radius: 50%;
  width: 350px;
  height: 350px;
  margin: 0 auto;
  box-shadow: 5px 5px 70px 10px gray;
  cursor: pointer;
  animation: luaFly 20s linear infinite ;
  animation-play-state: paused;
  &:hover{
    animation-play-state: running;
  }

  @keyframes luaFly {
    100%{
      transform: translateY(-500px);
    }
    
  }

`;
