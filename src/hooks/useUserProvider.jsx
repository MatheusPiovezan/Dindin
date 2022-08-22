import { useState } from 'react';

function useUserProvider() {
    
    const [openModalAdd, setOpenModalAdd] = useState(false);

    return {
        openModalAdd, setOpenModalAdd
    };
}

export default useUserProvider;