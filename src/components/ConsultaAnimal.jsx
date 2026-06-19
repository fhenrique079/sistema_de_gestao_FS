import React, { useState } from "react";
import lixeira from "../assets/lixeira.png";
import lapis from "../assets/lapis.png";
import { bancoDeDados } from "../Database/dados";

// TELA DE GERENCIAMENTO DE ANIMAIS
function ConsultaAnimal({ setTela, setItemEdicao, usuarioSessao }) {
  const [lista, setLista] = useState(bancoDeDados.animais || []);
  const [busca, setBusca] = useState("");
  const isAdmin = usuarioSessao?.nivel_acesso === "Administrador";

  function deletar(id) {
    if (confirm("Deseja remover este animal?")) {
      const novaLista = lista.filter(a => a.id_animal !== id);
      setLista(novaLista);

      if (bancoDeDados.animais) bancoDeDados.animais = novaLista;
    }
  }

  const filtrados = (lista || []).filter(a => 
    a.nome?.toLowerCase().includes(busca.toLowerCase()) || 
    a.especie?.toLowerCase().includes(busca.toLowerCase()) ||
    a.chip?.includes(busca)
  );

  return (
    <div className="center">
      <div className="card_cadastro">
        <h2>Gerenciamento de Animais</h2>
        <input 
          className="input busca-input" 
          placeholder="🔍 Buscar por nome, espécie ou chip..." 
          value={busca} 
          onChange={e => setBusca(e.target.value)} 
        />
        
        <div className="tabela-wrapper">
          <table className="tabela">
            <thead>
              <tr>
                <th>Chip</th>
                <th>Nome</th>
                <th>Espécie</th>
                <th>Raça</th>
                <th>Sexo</th>
                <th>Peso</th>
                {isAdmin && <th>Ações</th>}
              </tr>
            </thead>
            <tbody>
              {filtrados.length > 0 ? (
                filtrados.map(a => (
                  <tr key={a.id_animal}>
                    <td>{a.chip}</td>
                    <td>{a.nome}</td>
                    <td>{a.especie}</td>
                    <td>{a.raca}</td>
                    <td>{a.sexo}</td>
                    <td>{a.peso} kg</td>
                    {isAdmin && (
                      <td className="tableFunc">
                        <div className="btn-acao-editar" onClick={() => { setItemEdicao(a); setTela("cadastro_animal"); }}>
                          <img src={lapis} alt='EDITAR' />
                          <span>Editar</span>
                        </div>
                        <div className="btn-acao-excluir" onClick={() => deletar(a.id_animal)}>
                          <img src={lixeira} alt="EXCLUIR" />
                          <span>Excluir</span>
                        </div>
                      </td>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={isAdmin ? 7 : 6} style={{ textAlign: "center", padding: "20px" }}>
                    Nenhum animal cadastrado no banco de dados.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="botoes-container">
          <button className="cancelar" onClick={() => setTela("dashboard")}>Voltar</button>
          {isAdmin && <button className="botao" onClick={() => { setItemEdicao(null); setTela("cadastro_animal"); }}>Novo Cadastro</button>}
        </div>
      </div>
    </div>
  );
}

export default ConsultaAnimal;