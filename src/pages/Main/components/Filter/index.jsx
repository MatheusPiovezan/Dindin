import * as F from './styles';
import IconFilter from '../../../../assets/IconFilter.svg';

function Filter() {
    return (
        <F.Container>
            <div>
                <button><img src={IconFilter} />Filtrar</button>
            </div>
            <div className='filters'>
                <div className='div-strong'>
                    <strong>Categoria</strong>
                </div>
                <div className='buttons'>
                    <button>Limpar Filtros</button>
                    <button>Aplicar Filtros</button>
                </div>
            </div>
        </F.Container>
    );
}

export default Filter;