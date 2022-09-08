import * as E from './styles';
import useUser from '../../hooks/useUser';
import useRequest from '../../hooks/useRequest';
import IconClose from '../../assets/IconClose.svg';
import { useEffect } from 'react';

function EditUser() {
    const { setOpenModalUser, user, setEditUserName, setEditUserEmail,
        editUserPassword, setEditUserPassword, editUserPasswordConfirm,
        setEditUserPasswordConfirm, editUserName, editUserEmail } = useUser();
    const { handlePutUserSubmit } = useRequest();

    useEffect(() => {
        setEditUserName(user.nome);
        setEditUserEmail(user.email);
        setEditUserPassword('');
        setEditUserPasswordConfirm('');
    }, []);

    return (
        <E.Container>
            <div className='container'>
                <div className='title-close'>
                    <h1>Editar Perfil</h1>
                    <img src={IconClose} onClick={() => setOpenModalUser(false)} />
                </div>
                <form onSubmit={handlePutUserSubmit}>
                    <label>Nome</label>
                    <input value={editUserName} onChange={(e) => { setEditUserName(e.target.value) }} />
                    <label>E-mail</label>
                    <input value={editUserEmail} onChange={(e) => { setEditUserEmail(e.target.value) }} />
                    <label>Senha</label>
                    <input type='password' value={editUserPassword} onChange={(e) => { setEditUserPassword(e.target.value) }} />
                    <label>Confirmação de senha</label>
                    <input type='password' value={editUserPasswordConfirm} onChange={(e) => { setEditUserPasswordConfirm(e.target.value) }} />
                    <button>Confirmar</button>
                </form>
            </div>
        </E.Container>
    );
}

export default EditUser;