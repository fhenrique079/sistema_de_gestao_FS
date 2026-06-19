import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { bancoDeDados } from "../Database/dados";

// TELA DE CADASTRO DE PARCEIRO

function CadastroParceiro({ setTela, itemEdicao }) {
  const isEdit = !!itemEdicao;
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  useEffect(() => { 
    if(isEdit) reset(itemEdicao); 
    else reset({ nome: "", telefone: "", email: "", ramo_atividade: "", observacoes: "" });
  }, [itemEdicao, isEdit, reset]);

  function salvar(data) {
    if (isEdit) {
      const index = bancoDeDados.parceiros.findIndex(p => p.id_parceiro === itemEdicao.id_parceiro);
      bancoDeDados.parceiros[index] = { ...itemEdicao, ...data };
    } else {
      bancoDeDados.parceiros.push({ ...data, id_parceiro: Date.now() });
    }
    setTela("consulta_parceiro");
  }

  return (
    <div className="center">
      <form className="card_cadastro" onSubmit={handleSubmit(salvar)}>
        <h2>{isEdit ? "Editar Parceiro" : "Cadastro de Parceiro"}</h2>
        <div className="formulario-scroll">
          <div className="grid-campos">
            <div className="campo-container"><label>Nome *</label><input className={`input ${errors.nome ? "input-erro" : ""}`} {...register("nome", { required: true })} /></div>
            <div className="campo-container"><label>Telefone *</label><input className={`input ${errors.telefone ? "input-erro" : ""}`} {...register("telefone", { required: true })} /></div>
            <div className="campo-container"><label>E-mail *</label><input className={`input ${errors.email ? "input-erro" : ""}`} {...register("email", { required: true })} /></div>
            <div className="campo-container"><label>Ramo de Atividade *</label><input className={`input ${errors.ramo_atividade ? "input-erro" : ""}`} {...register("ramo_atividade", { required: true })} /></div>
          </div>
          <div className="campo-container" style={{marginTop:"10px"}}><label>Observações</label><textarea className="input" rows="2" {...register("observacoes")}></textarea></div>
        </div>
        <div className="botoes-container"><button className="cancelar" type="button" onClick={()=>setTela("consulta_parceiro")}>Cancelar</button><button className="botao" type="submit">Salvar</button></div>
      </form>
    </div>
  );
}

export default CadastroParceiro;