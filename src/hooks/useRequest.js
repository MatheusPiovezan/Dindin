import api from '../services/api';
import useUser from './useUser';
import { getItem } from '../utils/storage';
import { toast } from 'react-toastify';
import success from '../messages/success';

function useRequest() {
    const { setCategorys, btnClicked, addRegisterValue, addRegisterCategory, addRegisterDate, addRegisterDescription, setOpenModalAdd, setTableListTransactions, setExtract } = useUser();

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

    return {
        handleRegister,
        listCategory,
        listTransactions,
        transactionExtract,
        deleteTransact
    }
}

export default useRequest;