import * as S from './styles';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Logo from '../../assets/Logo.svg';

function SignUp() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmacaoSenha, setConfirmacaoSenha] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await api.post('/usuario', {
                nome,
                email,
                senha
            });

            console.log(response)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <S.Container>
            <div className='logo-img'>
                <img src={Logo} />
            </div>
            <div className='container-form'>
                <div className='background-form'>
                    <h1>Cadastre-se</h1>
                    <form onSubmit={handleSubmit}>
                        <label>Nome</label>
                        <input type='text' value={nome} onChange={(e) => setNome(e.target.value)} />
                        <label>E-mail</label>
                        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <label>Senha</label>
                        <input type='password' value={senha} onChange={(e) => setSenha(e.target.value)} />
                        <label>Confirmação de Senha</label>
                        <input type='password' value={confirmacaoSenha} onChange={(e) => setConfirmacaoSenha(e.target.value)} />
                        <button>Cadastrar</button>
                    </form>
                    <Link className='link' to='/'>Já tem cadastro? Clique aqui!</Link>
                </div>
            </div>
        </S.Container>
    );
}

export default SignUp;