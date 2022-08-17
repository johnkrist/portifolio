import { Link } from "react-router-dom";
import { HeaderStyle } from "./style";
import { TiSocialLinkedin, TiSocialGithub } from "react-icons/ti";



export function Header() {
  return (
    <HeaderStyle>
      <h1>Johnathan Costa</h1>
      <div>
        <Link className="menu"to="/">Inicio</Link>
        <Link className="menu"to="/sobre">Sobre</Link>
        <Link className="menu"to="/projetos">Projetos</Link>
        <Link className="menu"to="/contato">Contato</Link>
      </div>
      
      <div className="social">
        <a href="https://www.linkedin.com/in/johnkristhian/" target="_blank">
          <TiSocialLinkedin size={30} />
        </a>
        <a href="https://github.com/johnkrist" target="_blank">
          <TiSocialGithub size={30}/>
        </a>
      </div>
    </HeaderStyle>
  );
}
