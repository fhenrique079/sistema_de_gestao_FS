import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { bancoDeDados } from "../Database/dados";

// TELA DE CADASTRO DE COMPROMISSO
function FormularioCompromisso({ setTela, itemEdicao, usuarioSessao }) {
  const isEdit = !!itemEdicao;
  const [usandoOutroTipo, setUsandoOutroTipo] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  useEffect(() => {
    if (isEdit) {
      const dadosTratados = { ...itemEdicao, data: itemEdicao.data?.split("T")[0] };
      if (!["Veterinário", "Alimentação", "Limpeza", "Reunião"].includes(itemEdicao.tipo)) {
        setUsandoOutroTipo(true);
        dadosTratados.tipoPersonalizado = itemEdicao.tipo;
        dadosTratados.tipo = "Outros";
      }
      reset(dadosTratados);
    } else {
      setUsandoOutroTipo(false);
      reset({ titulo: "", descricao: "", data: "", hora: "", local: "", tipo: "Veterinário", status: "Agendado", criado_por: usuarioSessao?.login || "Sistema", tipoPersonalizado: "" });
    }
  }, [itemEdicao, isEdit, reset, usuarioSessao]);

  function salvar(data) {
    const payload = { ...data };
    
    if (usandoOutroTipo) {
      payload.tipo = payload.tipoPersonalizado;
    }
    delete payload.tipoPersonalizado;

    if (isEdit) {
      const index = bancoDeDados.compromissos.findIndex(c => c.id_compromisso === itemEdicao.id_compromisso);
      bancoDeDados.compromissos[index] = { ...itemEdicao, ...payload };
    } else {
      bancoDeDados.compromissos.push({ ...payload, id_compromisso: Date.now() });
    }
    
    setTela("agenda");
  }

  return (
    <div className="center">
      <form className="card_cadastro" onSubmit={handleSubmit(salvar)}>
        <h2>{isEdit ? "Editar Compromisso" : "Novo Compromisso"}</h2>
        
        <div className="formulario-scroll">
          <div className="grid-campos">
            <div className="campo-container"><label>Título *</label><input className={`input ${errors.titulo ? "input-erro" : ""}`} {...register("titulo", { required: "Campo obrigatório" })} /></div>
            <div className="campo-container"><label>Data *</label><input type="date" className={`input ${errors.data ? "input-erro" : ""}`} {...register("data", { required: "Campo obrigatório" })} /></div>
            <div className="campo-container"><label>Hora *</label><input type="time" className={`input ${errors.hora ? "input-erro" : ""}`} {...register("hora", { required: "Campo obrigatório" })} /></div>
            <div className="campo-container"><label>Local</label><input className="input" {...register("local")} /></div>
            <div className="campo-container">
              <label>Categoria / Tipo *</label>
              {!usandoOutroTipo ? (
                <select className={`input ${errors.tipo ? "input-erro" : ""}`} {...register("tipo", { required: "Campo obrigatório" })} onChange={(e) => { if (e.target.value === "Outros") setUsandoOutroTipo(true); }}>
                  <option value="Veterinário">Veterinário</option><option value="Alimentação">Alimentação</option><option value="Limpeza">Limpeza</option><option value="Reunião">Reunião</option><option value="Outros">Outros...</option>
                </select>
              ) : (
                <div style={{ display: "flex", gap: "5px", width:"100%" }}>
                  <input className="input" placeholder="Categoria" {...register("tipoPersonalizado", { required: "Defina o tipo customizado" })} />
                  <button className="cancelar" style={{height:"42px", padding:"0 10px"}} type="button" onClick={() => { setUsandoOutroTipo(false); reset(formValues => ({ ...formValues, tipo: "Veterinário" })); }}>X</button>
                </div>
              )}
            </div>
            <div className="campo-container"><label>Status *</label>
              <select className="input" {...register("status")}><option value="Agendado">Agendado</option><option value="Concluído">Concluído</option><option value="Cancelado">Cancelado</option></select>
            </div>
          </div>
          <div className="campo-container" style={{marginTop:"10px"}}><label>Descrição / Detalhes</label><textarea className="input" rows="2" {...register("descricao")}></textarea></div>
        </div>

        <div className="botoes-container">
          <button className="cancelar" type="button" onClick={() => setTela("agenda")}>Cancelar</button>
          <button className="botao" type="submit">Salvar</button>
        </div>
      </form>
    </div>
  );
}

export default FormularioCompromisso;