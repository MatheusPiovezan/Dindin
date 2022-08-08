import * as S from './styles';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';

function SignUp() {
    return (
        <S.Container>
            <div className='logo-img'>
                <img src={Logo} />
            </div>
            <div className='container-form'>
                <div className='background-form'>
                    <h1>Cadastre-se</h1>
                    <form>
                        <label>Nome</label>
                        <input />
                        <label>E-mail</label>
                        <input />
                        <label>Senha</label>
                        <input />
                        <label>Confirmação de Senha</label>
                        <input />
                    </form>
                    <button>Cadastrar</button>
                    <Link className='link' to='/'>Já tem cadastro? Clique aqui!</Link>
                </div>
            </div>
        </S.Container>
    );
}

export default SignUp;