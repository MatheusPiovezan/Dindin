import * as F from './styles';
import { useEffect, useState } from 'react';
import useUser from '../../../../hooks/useUser';
import useRequest from '../../../../hooks/useRequest';
import Table from '../Table';
import IconFilter from '../../../../assets/IconFilter.svg';
import IconMais from '../../../../assets/IconMais.svg';

function Filter() {
    const { listCategory } = useRequest();
    const { categorys } = useUser();
    const [openFilter, setOpenFilter] = useState(false);

    useEffect(() => {
        (async () => { await listCategory(); })();
    }, []);

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
                    {categorys.map((category) => (
                        <div className='categorys' key={category.id}>
                            <span>{category.descricao}</span>
                            <img src={IconMais} />
                        </div>
                    ))}
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