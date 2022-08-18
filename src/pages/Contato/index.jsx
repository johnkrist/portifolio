import React from "react";
import { motion } from "framer-motion";
import { ContatoStyle } from "./style";
import { Header } from "../../components/Header";
import { BigStars, Stars } from "../Inicio/style";

function Contato() {
  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.5 }}
      transition={{ duration: 0.9 }}
    >
      <ContatoStyle>
        <Stars />
        <BigStars />
        <Header />
        <form action="https://api.staticforms.xyz/submit" method="post">
        <h2 className="contatoTitle">Entre em contato comigo:</h2>
          <input
            type="hidden"
            name="accessKey"
            value="864d8bfc-d4c2-4bb7-a4eb-d44cd3e68d7f"
          />
          <input
            type="hidden"
            name="redirectTo"
            value="https://portifolio-eosin-nine.vercel.app"
          ></input>
          <div className="container">
            <label htmlFor="">Nome</label>
            <input type="text" name="name" />
          </div>
          <div className="container">
            <label htmlFor="">Email</label>
            <input type="text" name="email" />
          </div>
          <div className="container">
            <label htmlFor="">Mensagem</label>
            <textarea name="message"></textarea>
          </div>
          <button type="submit" value="Submit">
            Enviar
          </button>
        </form>
      </ContatoStyle>
    </motion.div>
  );
}

export default Contato;
