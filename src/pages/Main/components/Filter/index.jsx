import * as F from './styles';
import { useEffect, useState } from 'react';
import useUser from '../../../../hooks/useUser';
import useRequest from '../../../../hooks/useRequest';
import Table from '../Table';
import IconFilter from '../../../../assets/IconFilter.svg';
import IconMais from '../../../../assets/IconMais.svg';
import { useRef } from 'react';

function Filter() {
    const { listCategory } = useRequest();
    const { categorys } = useUser();
    const [openFilter, setOpenFilter] = useState(false);
    const FilterRef = useRef();

    const arrayFilter = [];

    console.log(arrayFilter);

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
                        <F.Div className='categorys' key={category.id} ref={FilterRef} colorDiv={category.descricao} onClick={() => FilterRef.current.style = 'background: #3A9FF1;'}>
                            <span>{category.descricao}</span>
                            <img src={IconMais} />
                        </F.Div>
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