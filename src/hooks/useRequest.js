import api from '../services/api';
import useUser from './useUser';
import { getItem } from '../utils/storage';
import { toast } from 'react-toastify';

function useRequest() {
    const { setCategorys, btnClicked, addRegisterValue, addRegisterCategory, addRegisterDate, addRegisterDescription, setOpenModalAdd, setTableListTransactions } = useUser();

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
        } catch (error) {
            console.log(error)
        }
    }

    return {
        handleRegister,
        listCategory,
        listTransactions
    }
}

export default useRequest;