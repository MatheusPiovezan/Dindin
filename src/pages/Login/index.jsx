import * as L from './styles';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import api from '../../services/api';
import schemaLogin from '../../schemas/schemaLogin';
import success from '../../messages/success';
import { setItem } from '../../utils/storage';
import Logo from '../../assets/Logo.svg';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            await schemaLogin.validate({ email, senha });

            const response = await api.post('/login', {
                email,
                senha
            });

            setItem('token', response.data.token);
            setItem('userId', response.data.usuario.id);
            toast.success(success.usersLoggedInSuccessfully);
            navigate('home');
        } catch (err) {
            toast.error(err.response.data.mensagem);
        }
    }
    return (
        <L.Container>
            <div className='logo-img'>
                <img src={Logo} />
            </div>
            <div className='container-row'>
                <div className='registration'>
                    <h1>Controle suas <span>finanças</span>, <br /> sem planilha chata.</h1>
                    <p>Organizar as suas finanças nunca foi tão fácil, <br /> com o DINDIN, você tem tudo num único lugar <br /> e em um clique de distância.</p>
                    <Link className='link' to='/signup'>Cadastre-se</Link>
                </div>
                <div className='form-login'>
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <label>E-mail</label>
                        <input type='text' onChange={(e) => setEmail(e.target.value)} />
                        <label>Senha</label>
                        <input type='password' onChange={(e) => setSenha(e.target.value)} />
                        <button>Entrar</button>
                    </form>
                </div>
            </div>
        </L.Container>
    );
}

export default Login;