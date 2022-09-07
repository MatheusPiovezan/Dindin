import * as P from './styles';
import useUser from '../../../../hooks/useUser';
import useRequest from '../../../../hooks/useRequest';

function PopUpDeleteTransaction() {
    const { setPopUp, popUpCurrentItem } = useUser();
    const { deleteTransact, listTransactions } = useRequest();

    async function deleteT() {
        setPopUp(false);

        await (async () => { await deleteTransact(popUpCurrentItem.id); })();
        await (async () => { await listTransactions(); })();
    }

    return (
        <P.Container>
            <div className='icon-polygon'>
            </div>
            <div className='title-popup'>
                <span>Apagar Item?</span>
            </div>
            <div className='btn-popup'>
                <button onClick={deleteT}>Sim</button>
                <button onClick={() => setPopUp(false)}>Não</button>
            </div>
        </P.Container>
    );
}

export default PopUpDeleteTransaction;