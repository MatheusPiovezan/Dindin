import * as R from './styles';
import { useEffect } from 'react';
import useUser from '../../../../hooks/useUser';
import useRequest from '../../../../hooks/useRequest';
import { formatMoney } from '../../../../utils/formats';

function Resume() {
    const { setOpenModalAdd, extract } = useUser();
    const { transactionExtract } = useRequest();

    useEffect(() => {
        (async () => { await transactionExtract(); })()
    })

    return (
        <R.Container>
            <div className='container'>
                <h1>Resumo</h1>

                <div className='entrie-exit'>
                    <div className='spans-spaces'>
                        <span>Entradas</span>
                        <span className='span-entrie'>{formatMoney(Number(extract.entrada))}</span>
                    </div>
                    <div className='spans-spaces'>
                        <span>Saídas</span>
                        <span className='span-exit'>{formatMoney(Number(extract.saida))}</span>
                    </div>
                </div>
                <div className='spans-spaces balance'>
                    <span>Saldo</span>
                    <span>{formatMoney(Number(extract.entrada - extract.saida))}</span>
                </div>
            </div>
            <button onClick={() => setOpenModalAdd(true)}>Adicionar Registro</button>
        </R.Container>
    );
}

export default Resume;