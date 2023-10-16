import { useState } from 'react';

function useUserProvider() {


    const [categorys, setCategorys] = useState([]);

    const [btnClicked, setBtnClicked] = useState('exit');

    const [openModalAdd, setOpenModalAdd] = useState(false);
    const [addRegisterValue, setAddRegisterValue] = useState('');
    const [addRegisterCategory, setAddRegisterCategory] = useState('');
    const [addRegisterDate, setAddRegisterDate] = useState('');
    const [addRegisterDescription, setAddRegisterDescription] = useState('');

    const [tableListTransactions, setTableListTransactions] = useState([]);

    const [extract, setExtract] = useState([]);

    const [popUp, setPopUp] = useState(false);
    const [popUpCurrentItem, setPopUpCurrentItem] = useState(null);

    const [openModalUser, setOpenModalUser] = useState(false);
    const [user, setUser] = useState([]);
    const [editUserName, setEditUserName] = useState('');
    const [editUserEmail, setEditUserEmail] = useState('');
    const [editUserPassword, setEditUserPassword] = useState('');
    const [editUserPasswordConfirm, setEditUserPasswordConfirm] = useState('');

    const [openModalEditTransact, setOpenModalEditTransact] = useState(false);
    const [editTransactionValue, setEditTransactionValue] = useState('');
    const [editTransactionCategory, setEditTransactionCategory] = useState('');
    const [editTransactionDate, setEditTransactionDate] = useState('');
    const [editTransactionDescription, setEditTransactionDescription] = useState('');

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
        popUpCurrentItem, setPopUpCurrentItem,

        openModalUser, setOpenModalUser,
        user, setUser,
        editUserName, setEditUserName,
        editUserEmail, setEditUserEmail,
        editUserPassword, setEditUserPassword,
        editUserPasswordConfirm, setEditUserPasswordConfirm,

        editTransactionValue, setEditTransactionValue,
        editTransactionCategory, setEditTransactionCategory,
        editTransactionDate, setEditTransactionDate,
        editTransactionDescription, setEditTransactionDescription,
        openModalEditTransact, setOpenModalEditTransact,
    };
}

export default useUserProvider;