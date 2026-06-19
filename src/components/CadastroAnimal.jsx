import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { bancoDeDados } from "../Database/dados";

// TELA DE CADASTRO DE ANIMAL

function CadastroAnimal({ setTela, itemEdicao }) {
  const isEdit = !!itemEdicao;
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    if (isEdit) reset(itemEdicao);
    else reset({ sexo: "Macho", chip: "", nome: "", especie: "", raca: "", peso: "" });
  }, [itemEdicao, isEdit, reset]);

  function salvar(data) {
    if (isEdit) {
      const index = bancoDeDados.animais.findIndex(a => a.id_animal === itemEdicao.id_animal);
      bancoDeDados.animais[index] = { ...data, id_animal: itemEdicao.id_animal };
    } else {
      bancoDeDados.animais.push({ ...data, id_animal: Date.now() });
    }
    setTela("consulta_animal");
  }

  return (
    <div className="center">
      <form className="card_cadastro" onSubmit={handleSubmit(salvar)}>
        <h2>{isEdit ? "Editar Animal" : "Cadastro de Animal"}</h2>
        <div className="grid-campos">
          <div className="campo-container"><label>Nome</label><input className="input" {...register("nome", { required: true })} /></div>
          <div className="campo-container"><label>Chip</label><input className="input" {...register("chip")} /></div>
          <div className="campo-container"><label>Espécie</label><input className="input" {...register("especie")} /></div>
          <div className="campo-container"><label>Peso</label><input type="number" step="0.01" min="0.00" className="input" {...register("peso")} /></div>
          <div className="campo-container"><label>Raça</label><input className="input" {...register("raca")} /></div>
        </div>
        <div className="botoes-container">
          <button className="cancelar" type="button" onClick={() => setTela("consulta_animal")}>Cancelar</button>
          <button className="botao" type="submit">Salvar Animal</button>
        </div>
      </form>
    </div>
  );
}
export default CadastroAnimal;