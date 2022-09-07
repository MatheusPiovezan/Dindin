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

    const [extract, setExtract] = useState([]);

    const [popUp, setPopUp] = useState(false);
    const [popUpCurrentItem, setPopUpCurrentItem] = useState(null);

    return {
        openModalAdd, setOpenModalAdd,

        categorys, setCategorys,
        btnClicked, setBtnClicked,
        addRegisterValue, setAddRegisterValue,
        addRegisterCategory, setAddRegisterCategory,
        addRegisterDate, setAddRegisterDate,
        addRegisterDescription, setAddRegisterDescription,

        tableListTransactions, setTableListTransactions,

        extract, setExtract,

        popUp, setPopUp,
        popUpCurrentItem, setPopUpCurrentItem
    };
}

export default useUserProvider;