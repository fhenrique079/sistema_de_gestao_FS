import React from "react";
import sair from "../assets/sair.png";

// TELA MENU PRINCIPAL
function Dashboard({ setTela, usuarioSessao, deslogar }) {
  const isAdmin = usuarioSessao?.nivel_acesso === "Administrador";

  return (
    <div className="center">
      <div className="menu">
        <div className="menu-topo-container">
          <h2>Santuário Animal</h2>
          <div className="btn-logout" onClick={deslogar}>
            <img title="Sair" src={sair} alt="Sair" />
            <span>Sair</span>
          </div>
        </div>
        
        <button className="btn-menu-opcao" onClick={() => setTela("consulta_animal")}>Gerenciamento de Animais</button>
        <button className="btn-menu-opcao" onClick={() => setTela("historico_vacinas")}>Gerenciamento de Vacinas</button>
        <button className="btn-menu-opcao" onClick={() => setTela("agenda")}>Gerenciamento de Agenda</button>
        
        {isAdmin && (
          <>
            <button className="btn-menu-opcao" onClick={() => setTela("consulta_usuario")}>Gerenciamento de Usuários</button>
            <button className="btn-menu-opcao" onClick={() => setTela("consulta_parceiro")}>Gerenciamento de Parceiros</button>
          </>
        )}
      </div>
    </div>
  );
}
export default Dashboard;