import { useState } from 'react';

function useUserProvider() {

    const [openModalAdd, setOpenModalAdd] = useState(false);
    const [categorys, setCategorys] = useState([]);

    return {
        openModalAdd, setOpenModalAdd,
        categorys, setCategorys
    };
}

export default useUserProvider;