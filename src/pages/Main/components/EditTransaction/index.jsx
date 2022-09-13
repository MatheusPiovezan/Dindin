import * as A from './styles';
import IconClose from '../../../../assets/IconClose.svg';
import { useEffect, useRef } from 'react';
import useUser from '../../../../hooks/useUser';
import useRequest from '../../../../hooks/useRequest';

function EditTransaction() {

    const { listCategory, handleEditTransaction } = useRequest();
    const { setOpenModalEditTransact, categorys, btnClicked, setBtnClicked, setEditTransactionValue, setEditTransactionCategory, setEditTransactionDate, setEditTransactionDescription } = useUser();
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
    useEffect(() => {
        (async () => { await listCategory(); })();
    }, []);

    return (
        <A.Container>
            <div className='container'>
                <div>
                    <div className='title-close'>
                        <h1>Editar Registro</h1>
                        <img src={IconClose} onClick={() => setOpenModalEditTransact(false)} />
                    </div>
                    <div className='btn-entry-exit'>
                        <button ref={btnEntryRef} onClick={() => setBtnClicked('entrada')}>Entrada</button>
                        <button ref={btnExitRef} onClick={() => setBtnClicked('saida')}>Saída</button>
                    </div>
                    <form>
                        <label>Valor</label>
                        <input type="text" onChange={(e) => setEditTransactionValue(e.target.value)} />
                        <label>Categoria</label>
                        <select onChange={(e) => setEditTransactionCategory(e.target.value)}>
                            {categorys.map((item) => (
                                <option key={item.id} value={item.id} >{item.descricao}</option>
                            ))}
                        </select>
                        <label>Data</label>
                        <input type="date" onChange={(e) => setEditTransactionDate(e.target.value)} />
                        <label>Descrição</label>
                        <input type="text" onChange={(e) => setEditTransactionDescription(e.target.value)} />
                    </form>
                </div>
                <button onClick={handleEditTransaction}>Confirmar</button>
            </div>
        </A.Container>
    );
}

export default EditTransaction;