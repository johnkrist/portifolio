import React from "react";
import { Header } from "../../components/Header";
import { SectionStacks, SobreStyle } from "./style";
import css from "../../img/css3-plain.svg";
import html from "../../img/html5-plain.svg";
import javascript from "../../img/javascript-original.svg";
import react from "../../img/react-original.svg";
import typescript from "../../img/typescript-plain.svg";
import postgresql from "../../img/postgresql-original-wordmark.svg";
import python from "../../img/python-original.svg";
import node from "../../img/nodejs-plain.svg";
import minhafoto from "../../img/johnporti.png";
import { motion } from "framer-motion";
import { BigStars, Stars } from "../Inicio/style";

function Sobre() {
  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.5 }}
      transition={{ duration: 0.9 }}
    >
      <Stars />
      <BigStars />
      <SobreStyle>
        <Header />
        <div className="mobile">

          <img className="minhaImg" src={minhafoto} alt="johnathan foto" />
          <h2 className="title">Sobre min:</h2>
          <p>
            Sou Johnathan, um entusiasta do desenvolvimento de software. Minha paixão por tecnologia me levou a me especializar em (React/Node). Sou um defensor do desenvolvimento ágil e da melhoria contínua, sempre buscando as melhores praticas.

            Acredito que a colaboração e a criatividade são fundamentais para o sucesso de qualquer projeto, e estou sempre em busca de aprender e crescer. Meu objetivo é me tornar lider técnico e participar
            de um projeto que traga grande impacto positivo na vida das pessoas. Vamos conectar?{" "}
          </p>
        </div>
        <SectionStacks>
          <div>
            <img src={html} alt="html" />
            <h3>HTML 5</h3>
          </div>

          <div>
            <img src={css} alt="css" />
            <h3>CSS 3</h3>
          </div>
          <div>
            <img src={javascript} alt="javascript" />
            <h3>Javascript</h3>
          </div>
          <div>
            <img src={typescript} alt="typescript" />
            <h3>Typescript</h3>
          </div>
          <div>
            <img src={react} alt="react" />
            <h3>React.js</h3>
          </div>
          <div>
            <img src={node} alt="node" />
            <h3>Node.js</h3>
          </div>
          <div>
            <img src={python} alt="python" />
            <h3>Python</h3>
          </div>
          <div>
            <img src={postgresql} alt="postgresql" />
            <h3>PostgreSQL</h3>
          </div>
        </SectionStacks>
      </SobreStyle>
    </motion.div>
  );
}

export default Sobre;
