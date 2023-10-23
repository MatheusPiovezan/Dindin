import api from "../services/api";
import useUser from "./useUser";
import { getItem } from "../utils/storage";
import { toast } from "react-toastify";
import success from "../messages/success";
import schemaEditUser from "../schemas/schemaEditUser";

function useRequest() {
  const {
    setCategorys,
    btnClicked,
    addRegisterValue,
    addRegisterCategory,
    addRegisterDate,
    addRegisterDescription,
    setOpenModalAdd,
    setTableListTransactions,
    setExtract,
    setUser,
    editUserName,
    editUserEmail,
    editUserPassword,
    editUserPasswordConfirm,
    setOpenModalUser,
    editTransactionValue,
    editTransactionCategory,
    editTransactionDate,
    editTransactionDescription,
    setOpenModalEditTransact,
    setBtnClicked,
    setEditTransactionValue,
    setEditTransactionCategory,
    setEditTransactionDate,
    setEditTransactionDescription,
    setCategorysFilter,
  } = useUser();

  async function handleRegister(e) {
    e.preventDefault();

    try {
      await api.post(
        "/transaction",
        {
          type: btnClicked,
          description: addRegisterDescription,
          value: Number(addRegisterValue),
          date: new Date(addRegisterDate + " 00:00:00"),
          category_id: Number(addRegisterCategory),
        },
        {
          headers: {
            Authorization: `Bearer ${getItem("token")}`,
          },
        }
      );

      setOpenModalAdd(false);
      listTransactions();
    } catch (error) {
      toast.error(error.response.data);
    }
  }

  async function listCategory() {
    try {
      const response = await api.get("/category", {
        headers: {
          Authorization: `Bearer ${getItem("token")}`,
        },
      });

      const categorys = response.data;

      categorys.forEach((category) => {
        category.checked = false;
      });
      setCategorys([...categorys]);
    } catch (error) {
      toast.error(error.message);
    }
  }

  async function listTransactions() {
    try {
      const response = await api.get("/transaction", {
        headers: {
          Authorization: `Bearer ${getItem("token")}`,
        },
      });

      setTableListTransactions(response.data);
      transactionExtract();
    } catch (error) {
      toast.error(error.message);
    }
  }

  async function transactionExtract() {
    try {
      const response = await api.get("/transaction/extract", {
        headers: {
          Authorization: `Bearer ${getItem("token")}`,
        },
      });

      setExtract(response.data);
    } catch (error) {
      toast.error(error.message);
    }
  }

  async function deleteTransact(id) {
    try {
      await api.delete(`/transaction/${id}`, {
        headers: {
          Authorization: `Bearer ${getItem("token")}`,
        },
      });

      toast.success(success.transactionDeletSuccess);
    } catch (error) {
      toast.error(error.response.data);
    }
  }

  async function getUser() {
    try {
      const response = await api.get("/user", {
        headers: {
          Authorization: `Bearer ${getItem("token")}`,
        },
      });

      setUser(response.data);
    } catch (error) {
      toast.error(error.message);
    }
  }

  async function handlePutUserSubmit(e) {
    e.preventDefault();

    try {
      await schemaEditUser.validate({
        editUserName,
        editUserEmail,
        editUserPassword,
        editUserPasswordConfirm,
      });

      await api.put(
        "/user",
        {
          name: editUserName,
          email: editUserEmail,
          password: editUserPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${getItem("token")}`,
          },
        }
      );

      getUser();
      setOpenModalUser(false);
    } catch (error) {
      toast.error(error.response.data);
    }
  }

  async function handleEditTransaction(e) {
    e.preventDefault();

    try {
      await api.put(
        `/transaction/${getItem("idTransact")}`,
        {
          type: btnClicked,
          description: editTransactionDescription,
          value: Number(editTransactionValue),
          date: new Date(editTransactionDate + " 00:00:00"),
          category_id: Number(editTransactionCategory),
        },
        {
          headers: {
            Authorization: `Bearer ${getItem("token")}`,
          },
        }
      );

      setOpenModalEditTransact(false);
      listTransactions();
    } catch (error) {
      toast.error(error.response.data);
    }
  }

  async function getTransactionId() {
    try {
      const response = await api.get(`/transaction/${getItem("idTransact")}`, {
        headers: {
          Authorization: `Bearer ${getItem("token")}`,
        },
      });

      setBtnClicked(response.data.tipo);
      setEditTransactionValue(response.data.valor);
      setEditTransactionCategory(response.data.categoria_id);
      setEditTransactionDate(response.data.data);
      setEditTransactionDescription(response.data.descricao);
    } catch (error) {
      toast.error(error.message);
    }
  }

  async function listTransactionsFilter(filters) {
    const joinFilters = filters.join("&");

    console.log(joinFilters);
    try {
      const response = await api.get(`/transaction?${joinFilters}`, {
        headers: {
          Authorization: `Bearer ${getItem("token")}`,
        },
      });

      setTableListTransactions(response.data);
    } catch (error) {
      toast.error(error.message);
    }
  }

  return {
    handleRegister,
    listCategory,
    listTransactions,
    transactionExtract,
    deleteTransact,
    getUser,
    handlePutUserSubmit,
    handleEditTransaction,
    getTransactionId,
    listTransactionsFilter,
  };
}

export default useRequest;
