import React, { useState } from "react";
import { useForm } from "react-hook-form";
import logo from "../assets/logo.png";
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { bancoDeDados } from "../Database/dados"; 

// TELA DE LOGIN

function Login({ setLogado, setUsuarioSessao }) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  function efetuarLogin(data) {
    const usuario = bancoDeDados.usuarios.find(u => u.login === data.loginUsuario && u.senha === data.senha);
    
    if (usuario) {
      setUsuarioSessao(usuario);
      setLogado(true);
    } else {
      alert("Usuário ou senha incorretos!");
    }
  }

  return (
    <div className="center">
      <form className="card" onSubmit={handleSubmit(efetuarLogin)}>
        <img className='logo' src={logo} alt="logo" />
        <div className="campo-container">
          <label>Nome de Usuário</label>
          <input className="input" {...register("loginUsuario", { required: "Obrigatório" })} />
        </div>
        <div className="campo-container">
          <label>Senha</label>
          <div className="senhaShow">
            <input type={showPassword ? "text": "password"} className="input" {...register("senha", { required: "Obrigatório" })} />
            <IconButton onClick={() => setShowPassword(!showPassword)}>{showPassword ? <Visibility /> : <VisibilityOff />}</IconButton>
          </div>
        </div>
        <button className="botao" type="submit">Entrar</button>
      </form>
    </div>
  );
}
export default Login;