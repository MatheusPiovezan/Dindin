import * as E from './styles';
import IconClose from '../../assets/IconClose.svg';
import { useState } from 'react';

function EditUser() {

    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            {openModal &&
                <E.Container>
                    <div className='container'>
                        <div className='title-close'>
                            <h1>Editar Perfil</h1>
                            <img src={IconClose} onClick={() => setOpenModal(false)} />
                        </div>
                        <form>
                            <label>Nome</label>
                            <input />
                            <label>E-mail</label>
                            <input />
                            <label>Senha</label>
                            <input />
                            <label>Confirmação de senha</label>
                            <input />
                        </form>
                        <button>Confirmar</button>
                    </div>
                </E.Container>
            }
        </>
    );
}

export default EditUser;