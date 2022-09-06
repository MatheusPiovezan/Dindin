import * as P from './styles';
import useUser from '../../../../hooks/useUser';

function PopUpDeleteTransaction() {
    const { setPopUp } = useUser();

    return (
        <P.Container>
            <div className='icon-polygon'>
            </div>
            <div className='title-popup'>
                <span>Apagar Item?</span>
            </div>
            <div className='btn-popup'>
                <button>Sim</button>
                <button onClick={() => setPopUp(false)}>Não</button>
            </div>
        </P.Container>
    );
}

export default PopUpDeleteTransaction;