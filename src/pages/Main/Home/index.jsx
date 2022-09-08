import * as H from './styles';
import { useEffect } from 'react';
import useUser from '../../../hooks/useUser';
import useRequest from '../../../hooks/useRequest';
import Filter from '../components/Filter';
import Resume from '../components/Resume';
import EditUser from '../../../components/EditUser';
import AddRegister from '../components/AddRegister';
import Logo from '../../../assets/Logo.svg';
import IconAvatar from '../../../assets/IconAvatar.svg';
import IconExit from '../../../assets/IconExit.svg';

function Home() {
  const { openModalAdd, openModalUser, setOpenModalUser, user } = useUser();
  const { getUser } = useRequest();

  useEffect(() => {
    (async () => { await getUser(); })()
  }, []);

  return (
    <H.Container>
      <div className='logo-user'>
        <div className='logo'>
          <img src={Logo} />
        </div>
        <div className='user'>
          <img src={IconAvatar} onClick={() => setOpenModalUser(true)} />
          <span>{user.nome}</span>
          <img src={IconExit} />
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
    </H.Container>
  );
}

export default Home;
