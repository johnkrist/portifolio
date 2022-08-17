import React from "react";
import { AnimatePresence } from "framer-motion";
import { Switch, Route } from "react-router-dom";
import Sobre from "../pages/Sobre";
import Projetos from "../pages/Projetos";
import Contato from "../pages/Contato";
import { Inicio } from "../pages/Inicio";

function Routes() {
  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/" component={Inicio} />

        <Route path="/sobre" component={Sobre} />

        <Route path="/projetos" render={() => <Projetos />} />

        <Route path="/contato" component={Contato} />
      </Switch>
    </AnimatePresence>
  );
}

export default Routes;
