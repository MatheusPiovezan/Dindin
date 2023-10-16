import * as A from "./styles";
import IconClose from "../../../../assets/IconClose.svg";
import { useEffect, useRef } from "react";
import useUser from "../../../../hooks/useUser";
import useRequest from "../../../../hooks/useRequest";
import { dateFormat } from "../../../../utils/formats";

function EditTransaction() {
  const { handleEditTransaction, getTransactionId, listCategory } =
    useRequest();
  const {
    setOpenModalEditTransact,
    categorys,
    btnClicked,
    setBtnClicked,
    setEditTransactionValue,
    editTransactionValue,
    setEditTransactionCategory,
    editTransactionCategory,
    setEditTransactionDate,
    editTransactionDate,
    setEditTransactionDescription,
    editTransactionDescription,
  } = useUser();
  const btnEntryRef = useRef();
  const btnExitRef = useRef();

  useEffect(() => {
    if (btnClicked !== "exit") {
      btnEntryRef.current.style = "background: #3A9FF1;";
      btnExitRef.current.style = "background: #B9B9B9;";
    } else {
      btnExitRef.current.style = "background: #FF576B;";
      btnEntryRef.current.style = "background: #B9B9B9;";
    }
  });

  useEffect(() => {
    (async () => {
      await listCategory();
    })();
    getTransactionId();
  }, []);

  return (
    <A.Container>
      <div className="container">
        <div className="container-form">
          <div className="title-close">
            <h1>Editar Registro</h1>
            <img
              src={IconClose}
              onClick={() => setOpenModalEditTransact(false)}
            />
          </div>
          <div className="btn-entry-exit">
            <button ref={btnEntryRef} onClick={() => setBtnClicked("entry")}>
              Entrada
            </button>
            <button ref={btnExitRef} onClick={() => setBtnClicked("exit")}>
              Saída
            </button>
          </div>
          <form>
            <label>Valor</label>
            <input
              value={editTransactionValue}
              type="text"
              onChange={(e) => setEditTransactionValue(e.target.value)}
            />
            <label>Categoria</label>
            <select
              value={editTransactionCategory}
              onChange={(e) => setEditTransactionCategory(e.target.value)}
            >
              <option>Selecione</option>
              {categorys.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.description}
                </option>
              ))}
            </select>
            <label>Data</label>
            <input
              value={editTransactionDate}
              type="date"
              onChange={(e) => setEditTransactionDate(e.target.value)}
            />
            <label>Descrição</label>
            <input
              value={editTransactionDescription}
              type="text"
              onChange={(e) => setEditTransactionDescription(e.target.value)}
            />
          </form>
        </div>
        <button onClick={handleEditTransaction}>Confirmar</button>
      </div>
    </A.Container>
  );
}

export default EditTransaction;
