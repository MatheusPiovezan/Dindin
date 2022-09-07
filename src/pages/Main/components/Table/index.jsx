import * as T from './styles';
import { Strong } from './styles'
import { useEffect } from 'react';
import useRequest from '../../../../hooks/useRequest';
import useUser from '../../../../hooks/useUser';
import { dayFormat, dateFormat, formatMoney } from '../../../../utils/formats';
import PopUpDeleteTransaction from '../PopupDeleteTransactions';
import IconPolygon from '../../../../assets/IconPolygon.svg';
import IconEdit from '../../../../assets/IconEdit.svg';
import IconDelete from '../../../../assets/IconDelete.svg';

function Table() {
    const { listTransactions } = useRequest();
    const { tableListTransactions, popUp, setPopUp, popUpCurrentItem, setPopUpCurrentItem } = useUser();

    useEffect(() => {
        (async () => { await listTransactions(); })();
    }, []);

    function handleOpenPopup(transact) {
        setPopUpCurrentItem(transact);
        setPopUp(!popUp);
    }

    return (
        <T.Container>
            <div className='titles'>
                <div className='small date'>
                    <strong>Data</strong>
                    <img src={IconPolygon} />
                </div>
                <strong className='middle'>Dia da semana</strong>
                <strong className='big'>Descrição</strong>
                <strong className='big'>Categoria</strong>
                <strong className='small'>Valor</strong>
            </div>
            {tableListTransactions.map((transaction) => (
                <div className='table' key={transaction.id}>
                    <strong className='small date'>{dateFormat(transaction.data)}</strong>
                    <span className='middle'>{dayFormat(transaction.data)}</span>
                    <span className='big'>{transaction.descricao}</span>
                    <span className='big'>{transaction.categoria_nome}</span>
                    <Strong className='small value' valuecolor={transaction.tipo}>{formatMoney(transaction.valor)}</Strong>
                    <div className='edit-delete'>
                        <div >
                            <img src={IconEdit} />
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
            ))};
        </T.Container>
    );
}

export default Table;