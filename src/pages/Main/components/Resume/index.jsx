import * as R from './styles';
import useUser from '../../../../hooks/useUser';

function Resume() {
    const { setOpenModalAdd } = useUser();

    return (
        <R.Container>
            <div className='container'>
                <h1>Resumo</h1>

                <div className='entrie-exit'>
                    <div className='spans-spaces'>
                        <span>Entradas</span>
                        <span className='span-entrie'>R$ 200,00</span>
                    </div>
                    <div className='spans-spaces'>
                        <span>Saídas</span>
                        <span className='span-exit'>R$ 70,50</span>
                    </div>
                </div>
                <div className='spans-spaces balance'>
                    <span>Saldo</span>
                    <span>R$ 129,50</span>
                </div>
            </div>
            <button onClick={() => setOpenModalAdd(true)}>Adicionar Registro</button>
        </R.Container>
    );
}

export default Resume;