import React, { useState } from "react";
import lixeira from "../assets/lixeira.png"
import lapis from "../assets/lapis.png"
import relogio from "../assets/relogio.png"
import calendario from "../assets/calendario.png"
import localiza from "../assets/local.png"
import buscarBranco from "../assets/procurar.png"
import { bancoDeDados } from "../Database/dados";

// TELA DE AGENDA

function formatarDataExibicao(dataSql) {
  if (!dataSql) return "";
  const parts = dataSql.split("T")[0].split("-");
  if (parts.length !== 3) return dataSql;
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

//TELA DE AGENDA
function AgendaView({ setTela, setItemEdicao, usuarioSessao }) {
  const [compromissos, setCompromissos] = useState(bancoDeDados.compromissos || []);
  const [pesquisa, setPesquisa] = useState("");
  const [filtroTipo, setFiltroTipo] = useState("todos");
  const [dataMin, setDataMin] = useState("");
  const [dataMax, setDataMax] = useState("");
  const [filtrosAbertos, setFiltrosAbertos] = useState(false);
  
  const isAdmin = usuarioSessao?.nivel_acesso === "Administrador";

  function verificarPermissao(c) {
    return isAdmin || (usuarioSessao && c.criado_por === usuarioSessao.login);
  }

  const filtrados = (compromissos || []).filter(c => {
    const dataFiltro = c.data ? c.data.split("T")[0] : "";
    const passaPesquisa = c.titulo?.toLowerCase().includes(pesquisa.toLowerCase());
    const passaTipo = filtroTipo === "todos" || c.tipo === filtroTipo;
    const passaDataMin = !dataMin || dataFiltro >= dataMin;
    const passaDataMax = !dataMax || dataFiltro <= dataMax;
    return passaPesquisa && passaTipo && passaDataMin && passaDataMax;
  });

  return (
    <div className="center">
      <div className="card_cadastro agenda-container-largo">
        <div className="agenda-header">
          <h2>Agenda</h2>
          <button className="btn-gatilho-filtros" type="button" onClick={() => setFiltrosAbertos(true)}>
            <img className="icones" src={buscarBranco} alt="imagem para buscar" />
            <span>Filtrar</span>
          </button>
        </div>
        <div className={`filtros-agenda-nova ${filtrosAbertos ? "aberto" : ""}`}>
          <button 
            className="btn-fechar-filtros" 
            type="button" 
            onClick={() => setFiltrosAbertos(false)}
          >
            X
          </button>

          <div className="filtro-item busca-wrapper">
            <input 
              className="input-limpo" 
              placeholder="Pesquisar compromisso..." 
              value={pesquisa} 
              onChange={e => setPesquisa(e.target.value)} 
            />
          </div>
          
          <div className="filtro-item">
            <label>Tipo de compromisso:</label>
            <select value={filtroTipo} onChange={e => setFiltroTipo(e.target.value)}>
              <option value="todos">todos</option>
              <option value="Veterinário">Veterinário</option>
              <option value="Alimentação">Alimentação</option>
              <option value="Limpeza">Limpeza</option>
              <option value="Reunião">Reunião</option>
            </select>
          </div>

          <div className="filtro-item">
            <label>Data mínima:</label>
            <input type="date" value={dataMin} onChange={e => setDataMin(e.target.value)} />
          </div>

          <div className="filtro-item">
            <label>Data máxima:</label>
            <input type="date" value={dataMax} onChange={e => setDataMax(e.target.value)} />
          </div>

          <button 
            className="btn-aplicar-filtros" 
            type="button" 
            onClick={() => setFiltrosAbertos(false)}
          >
            Aplicar Filtros
          </button>
        </div>
        <div className="tabela-wrapper scroll-agenda">
          <div className="lista-cards-agenda">
            {filtrados.map(c => {
              const podeMexer = verificarPermissao(c);
              const classeStatus = c.status === "Concluído" 
                ? "status-concluido" 
                : c.status === "Cancelado" 
                  ? "status-cancelado" 
                  : "status-agendado";

              return (
                <div key={c.id_compromisso} className="card-compromisso-horizontal">
                  <div className="comp-col-data">
                    <div className="info-icon-texto">
                      <img src={calendario} alt="Data" className="icone-agenda-mini" />
                      <span> {formatarDataExibicao(c.data)}</span>
                    </div>
                    <div className="info-icon-texto">
                      <img src={relogio} alt="Hora" className="icone-agenda-mini" />
                      <span> {c.hora ? c.hora.substring(0, 5) : ""}</span>
                    </div>
                  </div>
                  
                  <div className="comp-col-principal">
                    <h4>{c.titulo}</h4>
                    <div className="info-icon-texto local-texto">
                      <img className="icones" src={localiza} alt="localização" />
                      <span> {c.local || "Sede do Santuário"}</span>
                    </div>
                  </div>
                  
                  <div className="comp-col-tipo">
                    <span className="label-fixo">Tipo:</span>
                    <span className="valor-texto">{c.tipo}</span>
                  </div>
                  
                  <div className="comp-col-status">
                    <span className="label-fixo">Status</span>
                    <span className={`badge-status-novo ${classeStatus}`}>{c.status}</span>
                  </div>
                  
                  <div className="comp-col-acoes">
                    {podeMexer ? (
                      <>
                        <div className="btn-acao-novo" onClick={() => { setItemEdicao(c); setTela("formulario_compromisso"); }}>
                          <img src={lapis} alt="Editar" />
                          <span>Editar</span>
                        </div>
                        <div className="btn-acao-novo" onClick={() => { 
                          if(confirm("Excluir?")) {
                            const novaLista = compromissos.filter(item => item.id_compromisso !== c.id_compromisso);
                            setCompromissos(novaLista);
                            if (bancoDeDados.compromissos) bancoDeDados.compromissos = novaLista;
                          } 
                        }}>
                          <img src={lixeira} alt="Excluir" />
                          <span>Excluir</span>
                        </div>
                      </>
                    ) : (
                      <span className="bloqueado-label">Restrito</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="agenda-footer">
          <button className="btn-voltar-novo" type="button" onClick={() => setTela("dashboard")}>VOLTAR</button>
          <button className="btn-adicionar-novo" type="button" onClick={() => { setItemEdicao(null); setTela("formulario_compromisso"); }}>+ NOVO COMPROMISSO</button>
        </div>

      </div>
    </div>
  );
}

export default AgendaView;