import { useState } from 'react';

function useUserProvider() {

    const [openModalAdd, setOpenModalAdd] = useState(false);

    const [categorys, setCategorys] = useState([]);
    const [btnClicked, setBtnClicked] = useState('saida');
    const [addRegisterValue, setAddRegisterValue] = useState('');
    const [addRegisterCategory, setAddRegisterCategory] = useState('');
    const [addRegisterDate, setAddRegisterDate] = useState('');
    const [addRegisterDescription, setAddRegisterDescription] = useState('');

    const [tableListTransactions, setTableListTransactions] = useState([]);

    return {
        openModalAdd, setOpenModalAdd,

        categorys, setCategorys,
        btnClicked, setBtnClicked,
        addRegisterValue, setAddRegisterValue,
        addRegisterCategory, setAddRegisterCategory,
        addRegisterDate, setAddRegisterDate,
        addRegisterDescription, setAddRegisterDescription,

        tableListTransactions, setTableListTransactions,
    };
}

export default useUserProvider;