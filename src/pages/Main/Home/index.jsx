import * as H from './styles';
import Filter from '../components/Filter';
import Resume from '../components/Resume';
import EditUser from '../../../components/EditUser';
import AddRegister from '../components/AddRegister';
import Logo from '../../../assets/Logo.svg';
import IconAvatar from '../../../assets/IconAvatar.svg';
import IconExit from '../../../assets/IconExit.svg';
import useUser from '../../../hooks/useUser';

function Home() {
  const { openModalAdd } = useUser();
  
  return (
    <H.Container>
      <div className='logo-user'>
        <div className='logo'>
          <img src={Logo} />
        </div>
        <div className='user'>
          <img src={IconAvatar} />
          <span>Matheus</span>
          <img src={IconExit} />
        </div>
      </div>
      <div className='home'>
        <div className='div-row'>
          <Filter />
          <Resume />
        </div>
      </div>
      <EditUser />
      {openModalAdd && <AddRegister />}
    </H.Container>
  );
}

export default Home;
