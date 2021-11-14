import { FiPlusSquare } from 'react-icons/fi';

import { Container } from './styles';
import Logo from '../../assets/logo.svg';
import { useFood } from '../../Hooks/useFood';

export function Header() {
  const { isOpenAdd, setIsOpenAdd } = useFood();

  return (
    <Container>
      <header>
        <img src={Logo} alt='GoRestaurant' />
        <nav>
          <div>
            <button type='button' onClick={() => setIsOpenAdd(!isOpenAdd)}>
              <div className='text'>Novo Prato</div>
              <div className='icon'>
                <FiPlusSquare size={24} />
              </div>
            </button>
          </div>
        </nav>
      </header>
    </Container>
  );
}
