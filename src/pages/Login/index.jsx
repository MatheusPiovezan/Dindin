import * as L from './styles';
import Logo from '../../assets/Logo.svg';

function Login() {
    return (
        <L.Container>
            <div className='logo-img'>
                <img src={Logo} />
            </div>
            <div className='container-row'>
                <div className='registration'>
                    <h1>Controle suas <span>finanças</span>, sem planilha chata.</h1>
                    <p>Organizar as suas finanças nunca foi tão fácil, com o DINDIN, você tem tudo num único lugar e em um clique de distância.</p>
                    <button>Cadastre-se</button>
                </div>
                <div className='form-login'>
                    <h1>Login</h1>
                    <form>
                        <label>E-mail</label>
                        <input type='text' />
                        <label>Senha</label>
                        <input type='password' />
                    </form>
                    <button>Entrar</button>
                </div>
            </div>
        </L.Container>
    );
}

export default Login;