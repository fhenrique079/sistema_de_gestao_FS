import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { bancoDeDados } from "../Database/dados";

// TELA DE CADASTRO DE USUARIO

function CadastroUsuario({ setTela, itemEdicao }) {
  const isEdit = !!itemEdicao;
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (e) => e.preventDefault();

  useEffect(() => { 
    if(isEdit) reset({ ...itemEdicao, senha: "" });
    else reset({ login: "", senha: "", email: "", nivel_acesso: "Voluntário" });
  }, [itemEdicao, isEdit, reset]);

  function salvar(data) {
    if (isEdit) {
      const index = bancoDeDados.usuarios.findIndex(u => u.id_usuario === itemEdicao.id_usuario);
      if (!data.senha) data.senha = bancoDeDados.usuarios[index].senha;
      bancoDeDados.usuarios[index] = { ...itemEdicao, ...data };
    } else {
      bancoDeDados.usuarios.push({ ...data, id_usuario: Date.now() });
    }
    setTela("consulta_usuario");
  }

  return (
    <div className="center">
      <form className="card_cadastro" onSubmit={handleSubmit(salvar)}>
        <h2>{isEdit ? "Editar Usuário" : "Cadastro de Usuário"}</h2>
        <div className="formulario-scroll">
          <div className="grid-campos">
            <div className="campo-container"><label>Login *</label><input className={`input ${errors.login ? "input-erro" : ""}`} {...register("login", { required: "Campo obrigatório" })} /></div>
            <div className="campo-container"><label>E-mail *</label><input className={`input ${errors.email ? "input-erro" : ""}`} type="email" {...register("email", { required: "Campo obrigatório" })} /></div>
            <div className="campo-container">
              <label>{isEdit ? "Nova Senha" : "Senha *"}</label>
              <div className="senhaShow">
                <input className={`input ${errors.senha ? "input-erro" : ""}`} type={showPassword ? "text" : "password"} {...register("senha", { required: !isEdit ? "Campo obrigatório" : false })} />
                <IconButton type="button" aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </div>
            </div>
            <div className="campo-container"><label>Tipo *</label>
              <select className="input" {...register("nivel_acesso")}><option value="Voluntário">Voluntário</option><option value="Administrador">Administrador</option></select>
            </div>
          </div>
        </div>
        <div className="botoes-container"><button className="cancelar" type="button" onClick={()=>setTela("consulta_usuario")}>Cancelar</button><button className="botao" type="submit">Salvar</button></div>
      </form>
    </div>
  );
}

export default CadastroUsuario;