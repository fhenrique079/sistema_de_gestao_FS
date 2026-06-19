import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { bancoDeDados } from "../Database/dados";

// TELA DE CADASTRO DE VACINA
function RegistroVacina({ setTela, itemEdicao }) {
  const isEdit = !!itemEdicao;
  const [animais] = useState(bancoDeDados.animais);
  const [termoPesquisa, setTermoPesquisa] = useState("");
  const [mostrarDropdown, setMostrarDropdown] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();

  useEffect(() => {
    if (isEdit) {
      reset({
        id_animal: itemEdicao.id_animal,
        tipo_vacina: itemEdicao.tipo_vacina,
        data_aplicacao: itemEdicao.data_aplicacao?.split("T")[0],
        lote: itemEdicao.lote,
        dose_aplicada: itemEdicao.dose_aplicada || "",
        quem_aplicou: itemEdicao.quem_aplicou,
        proxima_dose: itemEdicao.proxima_dose?.split("T")[0] || ""
      });
      setTermoPesquisa(`${itemEdicao.nome_animal} (${itemEdicao.chip_animal})`);
    } else {
      reset({ id_animal: "", tipo_vacina: "", data_aplicacao: "", lote: "", dose_aplicada: "", quem_aplicou: "", proxima_dose: "" });
      setTermoPesquisa("");
    }
  }, [itemEdicao, isEdit, reset]);

  const animaisFiltrados = animais.filter(a => 
    a.nome?.toLowerCase().includes(termoPesquisa.toLowerCase()) || 
    a.chip?.toLowerCase().includes(termoPesquisa.toLowerCase())
  );

  function salvar(data) {
    const animalSelecionado = animais.find(a => a.id_animal === parseInt(data.id_animal));
    
    const payload = {
      ...data,
      id_animal: parseInt(data.id_animal),
      nome_animal: animalSelecionado ? animalSelecionado.nome : "",
      chip_animal: animalSelecionado ? animalSelecionado.chip : ""
    };

    if (isEdit) {
      const index = bancoDeDados.vacinas.findIndex(v => v.id_vacina === itemEdicao.id_vacina);
      bancoDeDados.vacinas[index] = { ...itemEdicao, ...payload };
    } else {
      bancoDeDados.vacinas.push({ ...payload, id_vacina: Date.now() });
    }
    
    setTela("historico_vacinas");
  }

  return (
    <div className="center">
      <form className="card_cadastro" onSubmit={handleSubmit(salvar)}>
        <h2>{isEdit ? "Editar Vacina" : "Registro de Vacina"}</h2>
        
        <div className="formulario-scroll">
          <div className="grid-campos">
            <div className="campo-container dropdown-wrapper">
              <label>Selecionar Animal *</label>
              <input 
                type="hidden" 
                {...register("id_animal", { required: "Por favor, escolha um animal na lista" })} 
              />
              <input 
                className={`input ${errors.id_animal ? "input-erro" : ""}`} 
                placeholder="Buscar animal..." 
                value={termoPesquisa} 
                onFocus={() => setMostrarDropdown(true)} 
                onChange={e => { setTermoPesquisa(e.target.value); setValue("id_animal", ""); }} 
              />
              {errors.id_animal && <span className="erro-texto">{errors.id_animal.message}</span>}
              
              {mostrarDropdown && (
                <div className="dropdown-lista">
                  {animaisFiltrados.map(an => (
                    <div 
                      key={an.id_animal} 
                      className="dropdown-item" 
                      onClick={() => { 
                        setValue("id_animal", an.id_animal, { shouldValidate: true }); 
                        setTermoPesquisa(`${an.nome} (${an.chip})`); 
                        setMostrarDropdown(false); 
                      }}
                    >
                      {an.nome} ({an.chip})
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="grid-campos">
            <div className="campo-container">
              <label>Tipo / Nome da Vacina *</label>
              <input className={`input ${errors.tipo_vacina ? "input-erro" : ""}`} {...register("tipo_vacina", { required: "Campo obrigatório" })} />
              {errors.tipo_vacina && <span className="erro-texto">{errors.tipo_vacina.message}</span>}
            </div>
            <div className="campo-container">
              <label>Data da Aplicação *</label>
              <input type="date" className={`input ${errors.data_aplicacao ? "input-erro" : ""}`} {...register("data_aplicacao", { required: "Campo obrigatório" })} />
              {errors.data_aplicacao && <span className="erro-texto">{errors.data_aplicacao.message}</span>}
            </div>
            <div className="campo-container">
              <label>Lote *</label>
              <input className={`input ${errors.lote ? "input-erro" : ""}`} {...register("lote", { required: "Campo obrigatório" })} />
              {errors.lote && <span className="erro-texto">{errors.lote.message}</span>}
            </div>
            <div className="campo-container"><label>Dose Opcional</label><input className="input" {...register("dose_aplicada")} /></div>
            <div className="campo-container">
              <label>Quem Aplicou *</label>
              <input className={`input ${errors.quem_aplicou ? "input-erro" : ""}`} {...register("quem_aplicou", { required: "Campo obrigatório" })} />
              {errors.quem_aplicou && <span className="erro-texto">{errors.quem_aplicou.message}</span>}
            </div>
            <div className="campo-container"><label>Próxima Dose Opcional</label><input type="date" className="input" {...register("proxima_dose")} /></div>
          </div>
        </div>

        <div className="botoes-container">
          <button className="cancelar" type="button" onClick={() => setTela("historico_vacinas")}>Cancelar</button>
          <button className="botao" type="submit">Salvar</button>
        </div>
      </form>
    </div>
  );
}

export default RegistroVacina;