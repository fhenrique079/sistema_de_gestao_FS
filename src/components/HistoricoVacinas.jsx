import React, { useState } from "react";
import lixeira from "../assets/lixeira.png"
import lapis from "../assets/lapis.png"
import { bancoDeDados } from "../Database/dados";

// TELA DE HISTORICO DE VASCINA
function formatarDataExibicao(dataSql) {
  if (!dataSql) return "";
  const parts = dataSql.split("T")[0].split("-");
  if (parts.length !== 3) return dataSql;
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

function HistoricoVacinas({ setTela, setItemEdicao, usuarioSessao }) {
  const [lista, setLista] = useState(bancoDeDados.vacinas);
  const [busca, setBusca] = useState("");
  const isAdmin = usuarioSessao?.nivel_acesso === "Administrador";

  function deletar(id) {
    if(confirm("Excluir?")) {
      bancoDeDados.vacinas = bancoDeDados.vacinas.filter(v => v.id_vacina !== id);
      setLista([...bancoDeDados.vacinas]);
    }
  }

  const filtrados = lista.filter(v => v.nome_animal?.toLowerCase().includes(busca.toLowerCase()) || v.tipo_vacina?.toLowerCase().includes(busca.toLowerCase()));

  return (
    <div className="center">
      <div className="card_cadastro">
        <h2>Histórico de Vacinas</h2>
        <input className="input busca-input" placeholder="🔍 Buscar por nome do animal ou vacina..." value={busca} onChange={e => setBusca(e.target.value)} />
        <div className="tabela-wrapper">
          <table className="tabela">
            <thead><tr><th>Animal</th><th>Vacina</th><th>Data</th><th>Lote</th><th>Próxima Dose</th>{isAdmin && <th>Ações</th>}</tr></thead>
            <tbody>
              {filtrados.map(v => (
                <tr key={v.id_vacina}><td>{v.nome_animal} ({v.chip_animal})</td><td>{v.tipo_vacina}</td><td>{formatarDataExibicao(v.data_aplicacao)}</td><td>{v.lote}</td><td>{formatarDataExibicao(v.proxima_dose) || "_________"}</td>
                  {isAdmin && (
                    <td className="tableFunc">
                      <div className="btn-acao-editar">
                        <img src={lapis} alt="EDITAR" onClick={() => { setItemEdicao(v); setTela("registro_vacina"); }} />
                        <span>Editar</span>
                      </div>
                      <div className="btn-acao-excluir"> 
                        <img src={lixeira} alt="EXCLUIR" onClick={() => deletar(v.id_vacina)} />
                        <span>Excluir</span>
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="botoes-container">
          <button className="cancelar" onClick={() => setTela("dashboard")}>Voltar</button>
          {isAdmin && <button className="botao" onClick={() => { setItemEdicao(null); setTela("registro_vacina"); }}>+ Nova Vacina</button>}
        </div>
      </div>
    </div>
  );
}

export default HistoricoVacinas;