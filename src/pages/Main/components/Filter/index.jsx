import * as F from './styles';
import { useState } from 'react';
import IconFilter from '../../../../assets/IconFilter.svg';
import Table from '../Table';

function Filter() {

    const [openFilter, setOpenFilter] = useState(false);

    return (
        <F.Container>
            <div onClick={() => setOpenFilter(!openFilter)}>
                <button><img src={IconFilter} />Filtrar</button>
            </div>
            {openFilter &&
                <div className='filters'>
                    <div className='div-strong'>
                        <strong>Categoria</strong>
                    </div>

                    <div className='buttons'>
                        <button>Limpar Filtros</button>
                        <button>Aplicar Filtros</button>
                    </div>
                </div>
            }
            <Table />
        </F.Container>
    );
}

export default Filter;