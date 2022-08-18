import { Header } from "../../components/Header";
import { Astronauta, BigStars, InicioStyle, Lua, Stars } from "./style";
import astrona from "../../img/astronauta.png";
import { motion } from "framer-motion";

export function Inicio() {
  return (
    <motion.div
      initial={{ opacity: 0.3}}
      animate={{ opacity: 1}}
      exit={{ opacity: 0.5}}
      transition={{ duration: 0.9 }}
    >
      <InicioStyle>
        <Stars />
        <BigStars />
        <Header />
        

        <div className="container">
          <h1 className="estatico">Eu sou:</h1>
        <ul className="dinamico">
            
            <li><span>Comunicativo</span></li>
            <li><span>Autodidata</span></li>
            <li><span>Designer</span></li>
            <li><span>Desenvolvedor Web</span></li>
           
            
        </ul>
        <Astronauta src={astrona} />
        </div>
        
        <Lua />
      </InicioStyle>
    </motion.div>
  );
}
