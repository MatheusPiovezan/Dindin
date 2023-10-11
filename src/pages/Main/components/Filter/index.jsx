import * as F from "./styles";
import { useEffect, useState } from "react";
import useUser from "../../../../hooks/useUser";
import useRequest from "../../../../hooks/useRequest";
import Table from "../Table";
import Chip from "../Chip";
import IconFilter from "../../../../assets/IconFilter.svg";

function Filter() {
  const { listCategory, listTransactionsFilter, listTransactions } =
    useRequest();
  const { categorys } = useUser();
  const [openFilter, setOpenFilter] = useState(false);
  const [categorysFilter, setCategorysFilter] = useState();

  function clearFilters() {
    const localCategorys = [...categorys];

    localCategorys.forEach((category) => (category.checked = false));
    setCategorysFilter([...localCategorys]);

    (async () => {
      await listTransactions();
    })();
  }

  function toApllyFilter() {
    const localCategorys = [...categorysFilter];
    const arrayFilter = [];

    localCategorys.forEach((category) => {
      if (category.checked) {
        arrayFilter.push(`filtro[]=${category.descricao}`);
      }
    });

    if (!arrayFilter.length) {
      return;
    }

    (async () => {
      await listTransactionsFilter(arrayFilter);
    })();
  }

  useEffect(() => {
    (async () => {
      await listCategory();
    })();

    setCategorysFilter(categorys);
  }, [openFilter]);

  return (
    <F.Container>
      <div onClick={() => setOpenFilter(!openFilter)}>
        <button>
          <img src={IconFilter} />
          Filtrar
        </button>
      </div>
      {openFilter && (
        <div className="filters">
          <div className="div-strong">
            <strong>Categoria</strong>
          </div>
          {categorysFilter.map((category) => (
            <Chip
              key={category.id}
              checked={category.checked}
              categoryDescricao={category.description}
              id={category.id}
              categorysFilter={categorysFilter}
              setCategorysFilter={setCategorysFilter}
            />
          ))}
          <div className="buttons">
            <button onClick={clearFilters}>Limpar Filtros</button>
            <button onClick={toApllyFilter}>Aplicar Filtros</button>
          </div>
        </div>
      )}
      <Table />
    </F.Container>
  );
}

export default Filter;
