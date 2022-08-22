import * as A from './styles';
import IconClose from '../../../../assets/IconClose.svg';
import { useEffect, useRef, useState } from 'react';
import useUser from '../../../../hooks/useUser';

function AddRegister() {

    const { setOpenModalAdd } = useUser();
    const [btnClicked, setBtnClicked] = useState('saida');
    const btnEntryRef = useRef();
    const btnExitRef = useRef();

    useEffect(() => {
        if (btnClicked !== 'saida') {
            btnEntryRef.current.style = 'background: #3A9FF1;';
            btnExitRef.current.style = 'background: #B9B9B9;';
        } else {
            btnExitRef.current.style = 'background: #FF576B;';
            btnEntryRef.current.style = 'background: #B9B9B9;';
        }
    })

    return (
        <A.Container>
            <div className='container'>
                <div>
                    <div className='title-close'>
                        <h1>Adicionar Registro</h1>
                        <img src={IconClose} onClick={() => setOpenModalAdd(false)} />
                    </div>
                    <div className='btn-entry-exit'>
                        <button ref={btnEntryRef} onClick={() => setBtnClicked('entrada')}>Entrada</button>
                        <button ref={btnExitRef} onClick={() => setBtnClicked('saida')}>Saída</button>
                    </div>
                    <form>
                        <label>Valor</label>
                        <input type="text" />
                        <label>Categoria</label>
                        <select>
                            <option>teste</option>
                            <option>teste</option>
                            <option>teste</option>
                        </select>
                        <label>Data</label>
                        <input type="text" />
                        <label>Descrição</label>
                        <input type="text" />
                    </form>
                </div>
                <button>Confirmar</button>
            </div>
        </A.Container>
    );
}

export default AddRegister;