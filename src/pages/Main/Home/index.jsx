import * as H from './styles';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useUser from '../../../hooks/useUser';
import useRequest from '../../../hooks/useRequest';
import { clearItems } from '../../../utils/storage';
import Filter from '../components/Filter';
import Resume from '../components/Resume';
import EditUser from '../../../components/EditUser';
import AddRegister from '../components/AddRegister';
import EditTransaction from '../components/EditTransaction';
import Logo from '../../../assets/Logo.svg';
import IconAvatar from '../../../assets/IconAvatar.svg';
import IconExit from '../../../assets/IconExit.svg';

function Home() {
  const { openModalAdd, openModalUser, setOpenModalUser, user, openModalEditTransact } = useUser();
  const { getUser } = useRequest();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => { await getUser(); })();
  }, []);

  function logOut() {
    clearItems();
    navigate('/');
  }

  return (
    <H.Container>
      <div className='logo-user'>
        <div className='logo'>
          <img src={Logo} />
        </div>
        <div className='user'>
          <img src={IconAvatar} onClick={() => setOpenModalUser(true)} />
          <span>{user.nome}</span>
          <img src={IconExit} onClick={() => logOut()} />
        </div>
      </div>
      <div className='home'>
        <div className='div-row'>
          <Filter />
          <Resume />
        </div>
      </div>
      {openModalUser && <EditUser />}
      {openModalAdd && <AddRegister />}
      {openModalEditTransact && <EditTransaction />}
    </H.Container>
  );
}

export default Home;
