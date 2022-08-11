import * as T from './styles';
import IconPolygon from '../../../../assets/IconPolygon.svg';
import IconEdit from '../../../../assets/IconEdit.svg';
import IconDelete from '../../../../assets/IconDelete.svg';

function Table() {
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
            <div className='table'>
                <strong className='small date'>01/09/21</strong>
                <span className='middle'>Segunda</span>
                <span className='big'>Venda dos brigadeiros</span>
                <span className='big'>Pix</span>
                <strong className='small'>R$ 100,00</strong>
                <div className='edit-delete'>
                    <img src={IconEdit} />
                    <img src={IconDelete} />
                </div>
            </div>
        </T.Container>
    );
}

export default Table;