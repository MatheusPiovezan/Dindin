import * as S from "./styles";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";
import schemaSignup from "../../schemas/schemaSignup";
import success from "../../messages/success";
import Logo from "../../assets/Logo.svg";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmacaoSenha, setConfirmacaoSenha] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    await schemaSignup.validate({ name, email, password, confirmacaoSenha });

    try {
      await api.post("/user", {
        name,
        email,
        password,
      });

      toast.success(success.userCreated);
      navigate("/");
    } catch (err) {
      toast.error(err.response.data);
    }
  }

  return (
    <S.Container>
      <div className="logo-img">
        <img src={Logo} />
      </div>
      <div className="container-form">
        <div className="background-form">
          <h1>Cadastre-se</h1>
          <form onSubmit={handleSubmit}>
            <label>Nome</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>E-mail</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Confirmação de Senha</label>
            <input
              type="password"
              value={confirmacaoSenha}
              onChange={(e) => setConfirmacaoSenha(e.target.value)}
            />
            <button>Cadastrar</button>
          </form>
          <Link className="link" to="/">
            Já tem cadastro? Clique aqui!
          </Link>
        </div>
      </div>
    </S.Container>
  );
}

export default SignUp;
