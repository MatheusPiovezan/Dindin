import api from '../services/api';
import useUser from './useUser';
import { getItem } from '../utils/storage';

function useRequest() {
    const { setCategorys } = useUser();
    async function handleRegister() {
        try {

        } catch (err) {
            console.log(err);
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
        } catch (err) {
            console.log(err);
        }
    }

    return {
        handleRegister,
        listCategory
    }
}

export default useRequest;