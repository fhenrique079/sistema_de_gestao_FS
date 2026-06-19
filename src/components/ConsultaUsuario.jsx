import React, { useState } from "react";
import lixeira from "../assets/lixeira.png"
import lapis from "../assets/lapis.png"
import { bancoDeDados } from "../Database/dados";

// TELA DE CONSULTA DE USUARIO

function ConsultaUsuario({ setTela, setItemEdicao }) {
  const [lista, setLista] = useState(bancoDeDados.usuarios);
  
  function deletar(id) {
    if (confirm("Deseja realmente remover este usuário?")) {
      bancoDeDados.usuarios = bancoDeDados.usuarios.filter(u => u.id_usuario !== id);
      setLista([...bancoDeDados.usuarios]);
    }
  }

  const listaSemAdminPadrao = lista.filter(u => u.login !== "admin");

  return (
    <div className="center">
      <div className="card_cadastro">
        <h2>Gerenciamento de Usuários</h2>
        
        <div className="tabela-wrapper">
          <table className="tabela">
            <thead><tr><th>Usuário</th><th>E-mail</th><th>Nível de Acesso</th><th>Ações</th></tr></thead>
            <tbody>
              {listaSemAdminPadrao.map(u => (
                <tr key={u.id_usuario}><td>{u.login}</td><td>{u.email}</td><td>{u.nivel_acesso}</td>
                  <td className="tableFunc">
                    <div className="btn-acao-editar">
                      <img className="btn-acao-editar" src={lapis} onClick={() => { setItemEdicao(u); setTela("cadastro_usuario"); }} />
                      <span>Editar</span>
                    </div>
                    <div className="btn-acao-excluir">
                      <img className="btn-acao-excluir" src={lixeira} onClick={() => deletar(u.id_usuario)} />
                      <span>Excluir</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="botoes-container">
          <button className="cancelar" onClick={() => setTela("dashboard")}>Voltar</button>
          <button className="botao" onClick={() => { setItemEdicao(null); setTela("cadastro_usuario"); }}>Novo Usuário</button>
        </div>
      </div>
    </div>
  );
}

export default ConsultaUsuario;