import * as C from './styles';

function Chip({ checked, categoryDescricao, categorysFilter, id, setCategorysFilter }) {

    function handleCheckCategorie() {
        const localCategorys = [...categorysFilter];

        localCategorys.forEach((category) => {
            if (category.id === id) {
                category.checked = !category.checked
            }
        });

        setCategorysFilter([...localCategorys]);
    }

    return (
        <C.Container>
            <div className={`categorys ${checked ? 'checked' : 'unchecked'}`} checked={checked} onClick={handleCheckCategorie}>
                <span>{categoryDescricao}</span>
                <span>{checked ? 'x' : '+'}</span>
            </div>
        </C.Container>
    );
}

export default Chip;