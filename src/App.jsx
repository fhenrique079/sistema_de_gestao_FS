import React, { useState } from "react";
import "./App.css";

import Login from "./components/Login";
import Dashboard from "./components/menuPrincipal";
import ConsultaAnimal from "./components/ConsultaAnimal";
import CadastroAnimal from "./components/CadastroAnimal";
import HistoricoVacinas from "./components/HistoricoVacinas";
import RegistroVacina from "./components/RegistroVacina";
import AgendaView from "./components/Agenda";
import FormularioCompromisso from "./components/NovoCompromisso"; 
import ConsultaUsuario from "./components/ConsultaUsuario";
import CadastroUsuario from "./components/CadastroUsuario";
import ConsultaParceiro from "./components/ConsultaParceiro";
import CadastroParceiro from "./components/CadastroParceiro";

function App() {
  const [logado, setLogado] = useState(false);
  const [tela, setTela] = useState("dashboard");
  const [usuarioSessao, setUsuarioSessao] = useState(null);
  const [itemEdicao, setItemEdicao] = useState(null);

  const deslogar = () => {
    setLogado(false);
    setUsuarioSessao(null);
    setTela("dashboard");
  };

  if (!logado) {
    return <Login setLogado={setLogado} setUsuarioSessao={setUsuarioSessao} />;
  }

  switch (tela) {
    case "dashboard": 
      return <Dashboard setTela={setTela} usuarioSessao={usuarioSessao} deslogar={deslogar} />;
    
    case "consulta_animal": 
      return <ConsultaAnimal setTela={setTela} setItemEdicao={setItemEdicao} usuarioSessao={usuarioSessao} />;
    
    case "cadastro_animal": 
      return <CadastroAnimal setTela={setTela} itemEdicao={itemEdicao} />;
    
    case "historico_vacinas": 
      return <HistoricoVacinas setTela={setTela} setItemEdicao={setItemEdicao} usuarioSessao={usuarioSessao} />;
    
    case "registro_vacina": 
      return <RegistroVacina setTela={setTela} itemEdicao={itemEdicao} />; // ADICIONADO
    
    case "agenda": 
      return <AgendaView setTela={setTela} setItemEdicao={setItemEdicao} usuarioSessao={usuarioSessao} />;
    
    case "formulario_compromisso": 
      return <FormularioCompromisso setTela={setTela} itemEdicao={itemEdicao} usuarioSessao={usuarioSessao} />; // ADICIONADO
    
    case "consulta_usuario": 
      return <ConsultaUsuario setTela={setTela} setItemEdicao={setItemEdicao} />;
    
    case "cadastro_usuario": 
      return <CadastroUsuario setTela={setTela} itemEdicao={itemEdicao} />;
    
    case "consulta_parceiro": 
      return <ConsultaParceiro setTela={setTela} setItemEdicao={setItemEdicao} />;
    
    case "cadastro_parceiro": 
      return <CadastroParceiro setTela={setTela} itemEdicao={itemEdicao} />;
    
    default: 
      return <Dashboard setTela={setTela} usuarioSessao={usuarioSessao} deslogar={deslogar} />;
  }
}

export default App;