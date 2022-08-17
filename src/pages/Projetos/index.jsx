import React from "react";
import { Header } from "../../components/Header";
import { Slider } from "../../components/Slider/Slider";
import { ProjetosStyle } from "./style";
import { motion } from "framer-motion";
import {Stars, BigStars} from "../Inicio/style"
function Projetos() {
  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.5 }}
      transition={{ duration: 0.9 }}
    >
      <ProjetosStyle>
        <BigStars/>
       <Stars/>
        <Header />
        <h3>Meus Projetos:</h3>
        <Slider></Slider>
      </ProjetosStyle>
    </motion.div>
  );
}

export default Projetos;
