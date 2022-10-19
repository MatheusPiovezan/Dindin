import * as T from './styles';
import { Strong } from './styles'
import { useEffect, useState } from 'react';
import useRequest from '../../../../hooks/useRequest';
import useUser from '../../../../hooks/useUser';
import { dayFormat, dateFormat, formatMoney } from '../../../../utils/formats';
import PopUpDeleteTransaction from '../PopupDeleteTransactions';
import IconPolygonUp from '../../../../assets/IconPolygonUp.svg';
import IconPolygonDown from '../../../../assets/IconPolygonDown.svg';
import IconEdit from '../../../../assets/IconEdit.svg';
import IconDelete from '../../../../assets/IconDelete.svg';
import { setItem } from '../../../../utils/storage';

function Table() {
    const { listTransactions } = useRequest();
    const { tableListTransactions, popUp, setPopUp, popUpCurrentItem, setPopUpCurrentItem, setOpenModalEditTransact } = useUser();
    const [orderTransact, setOrderTransact] = useState([]);
    const [asc, setAsc] = useState(true);

    useEffect(() => {
        (async () => { await listTransactions(); })();
    }, []);

    useEffect(() => {
        const localTransaction = [...tableListTransactions];

        asc ? localTransaction.sort((a, b) => new Date(a.data) - new Date(b.data)) :
            localTransaction.sort((a, b) => new Date(b.data) - new Date(a.data));

        setOrderTransact([...localTransaction]);
    }, [asc, tableListTransactions])

    function handleOpenPopup(transact) {
        setPopUpCurrentItem(transact);
        setPopUp(!popUp);
    }

    return (
        <T.Container>
            <div className='titles'>
                <div className='small date' onClick={() => setAsc(!asc)}>
                    <strong>Data</strong>
                    <img src={asc ? IconPolygonUp : IconPolygonDown} />
                </div>
                <strong className='middle'>Dia da semana</strong>
                <strong className='big'>Descrição</strong>
                <strong className='big'>Categoria</strong>
                <strong className='small'>Valor</strong>
            </div>
            {orderTransact.map((transaction) => (
                <div className='table' key={transaction.id}>
                    <strong className='small date'>{dateFormat(transaction.data)}</strong>
                    <span className='middle'>{dayFormat(transaction.data)}</span>
                    <span className='big'>{transaction.descricao}</span>
                    <span className='big'>{transaction.categoria_nome}</span>
                    <Strong className='small value' valuecolor={transaction.tipo}>{formatMoney(transaction.valor)}</Strong>
                    <div className='edit-delete'>
                        <div >
                            <img src={IconEdit} onClick={() => { { setOpenModalEditTransact(true) } { setItem('idTransact', transaction.id) } }} />
                        </div>
                        <div>
                            <div>
                                <img src={IconDelete} onClick={() => handleOpenPopup(transaction)} />
                            </div>
                            <div className='popup-position'>
                                {popUp && transaction.id == popUpCurrentItem.id &&
                                    <PopUpDeleteTransaction />
                                }
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </T.Container>
    );
}

export default Table;