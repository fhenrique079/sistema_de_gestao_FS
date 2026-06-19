import React, { useState } from "react";
import lixeira from "../assets/lixeira.png"
import lapis from "../assets/lapis.png"
import { bancoDeDados } from "../Database/dados";

// TELA DE CONSUULTA DE PARCEIRO

function ConsultaParceiro({ setTela, setItemEdicao }) {
  const [lista, setLista] = useState(bancoDeDados.parceiros);

  function deletar(id) {
    if(confirm("Excluir?")) {
      bancoDeDados.parceiros = bancoDeDados.parceiros.filter(p => p.id_parceiro !== id);
      setLista([...bancoDeDados.parceiros]);
    }
  }

  return (
    <div className="center">
      <div className="card_cadastro">
        <h2>Contatos de Parceiros</h2>
        
        <div className="tabela-wrapper">
          <table className="tabela">
            <thead><tr><th>Nome</th><th>Telefone</th><th>E-mail</th><th>Ramo</th><th>Ações</th></tr></thead>
            <tbody>
              {lista.map(p => (
                <tr key={p.id_parceiro}><td>{p.nome}</td><td>{p.telefone}</td><td>{p.email}</td><td>{p.ramo_atividade}</td>
                  <td className="tableFunc">
                    <div className="btn-acao-editar">
                      <img className="btn-acao-editar" src={lapis} onClick={() => { setItemEdicao(p); setTela("cadastro_parceiro"); }} />
                      <span>Editar</span>
                    </div>
                    <div className="btn-acao-excluir">
                      <img className="btn-acao-excluir" src={lixeira} onClick={() => deletar(p.id_parceiro)} />
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
          <button className="botao" onClick={() => { setItemEdicao(null); setTela("cadastro_parceiro"); }}>Novo Parceiro</button>
        </div>
      </div>
    </div>
  );
}

export default ConsultaParceiro;