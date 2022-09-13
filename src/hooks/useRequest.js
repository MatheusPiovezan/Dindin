import api from '../services/api';
import useUser from './useUser';
import { getItem } from '../utils/storage';
import { toast } from 'react-toastify';
import success from '../messages/success';
import schemaEditUser from '../schemas/schemaEditUser';

function useRequest() {
    const { setCategorys, btnClicked, addRegisterValue, addRegisterCategory,
        addRegisterDate, addRegisterDescription, setOpenModalAdd, setTableListTransactions,
        setExtract, setUser, editUserName, editUserEmail, editUserPassword, editUserPasswordConfirm,
        setOpenModalUser, editTransactionValue, editTransactionCategory, editTransactionDate,
        editTransactionDescription, setOpenModalEditTransact } = useUser();

    async function handleRegister(e) {
        e.preventDefault();

        try {
            await api.post('/transacao', {
                tipo: btnClicked,
                descricao: addRegisterDescription,
                valor: Number(addRegisterValue),
                data: addRegisterDate,
                categoria_id: Number(addRegisterCategory),
            }, {
                headers: {
                    Authorization: `Bearer ${getItem('token')}`
                }
            })

            setOpenModalAdd(false);
            listTransactions();
        } catch (error) {
            toast.error(error.response.data.mensagem);
        }
    }

    async function listCategory() {
        try {
            const response = await api.get('/categoria', {
                headers: {
                    Authorization: `Bearer ${getItem('token')}`
                }
            });

            setCategorys(response.data);
        } catch (error) {
            toast.error(error.message);
        }
    }

    async function listTransactions() {
        try {
            const response = await api.get('/transacao', {
                headers: {
                    Authorization: `Bearer ${getItem('token')}`
                }
            });

            setTableListTransactions(response.data);
            transactionExtract();
        } catch (error) {
            toast.error(error.message);
        }
    }

    async function transactionExtract() {
        try {
            const response = await api.get('/transacao/extrato', {
                headers: {
                    Authorization: `Bearer ${getItem('token')}`
                }
            });

            setExtract(response.data);
        } catch (error) {
            toast.error(error.message);
        }
    }

    async function deleteTransact(id) {
        try {
            await api.delete(`/transacao/${id}`, {
                headers: {
                    Authorization: `Bearer ${getItem('token')}`
                }
            });

            toast.success(success.transactionDeletSuccess);
        } catch (error) {
            toast.error(error.response.data.mensagem);
        }
    }

    async function getUser() {
        try {
            const response = await api.get('/usuario', {
                headers: {
                    Authorization: `Bearer ${getItem('token')}`
                }
            });

            setUser(response.data);
        } catch (error) {
            toast.error(error.message);
        }
    }

    async function handlePutUserSubmit(e) {
        e.preventDefault();

        try {
            await schemaEditUser.validate({ editUserName, editUserEmail, editUserPassword, editUserPasswordConfirm });

            await api.put('/usuario', {
                nome: editUserName,
                email: editUserEmail,
                senha: editUserPassword,
            }, {
                headers: {
                    Authorization: `Bearer ${getItem('token')}`
                }
            });

            getUser();
            setOpenModalUser(false);
        } catch (error) {
            toast.error(error.message);
        }
    }

    async function handleEditTransaction(e) {
        e.preventDefault();

        try {
            await api.put(`/transacao/$id`, {
                tipo: btnClicked,
                descricao: editTransactionDescription,
                valor: Number(editTransactionValue),
                data: editTransactionDate,
                categoria_id: Number(editTransactionCategory),
            }, {
                headers: {
                    Authorization: `Bearer ${getItem('token')}`
                }
            })

            setOpenModalEditTransact(false);
            listTransactions();
        } catch (error) {
            toast.error(error.response.data.mensagem);
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
        handleEditTransaction
    }
}

export default useRequest;