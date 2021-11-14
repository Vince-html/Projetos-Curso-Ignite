import { FiEdit3, FiTrash } from 'react-icons/fi';
import { useFood } from '../../Hooks/useFood';

import { Container, Header } from './styles';

interface FoodProps {
  food: SingleFoodProps;
}


export interface SingleFoodProps {

  name: string;
  image: string;
  available: boolean;
  description: string;
  price: number;
  id: number;

}

export function Food({ food }: FoodProps) {
  const { toggleAvailable, handleEditFood, handleDeleteFood } = useFood();

  return (
    <Container>
      <Header available={food.available}>
        <img src={food.image} alt={food.name} />
      </Header>
      <section className='body'>
        <h2>{food.name}</h2>
        <p>{food.description}</p>
        <p className='price'>
          R$ <b>{food.price}</b>
        </p>
      </section>
      <section className='footer'>
        <div className='icon-container'>
          <button
            type='button'
            className='icon'
            onClick={() => handleEditFood(food)}
            data-testid={`edit-food-${food.id}`}
          >
            <FiEdit3 size={20} />
          </button>

          <button
            type='button'
            className='icon'
            onClick={() => handleDeleteFood(food.id)}
            data-testid={`remove-food-${food.id}`}
          >
            <FiTrash size={20} />
          </button>
        </div>

        <div className='availability-container'>
          <p>{food.available ? 'Disponível' : 'Indisponível'}</p>

          <label htmlFor={`available-switch-${food.id}`} className='switch'>
            <input
              id={`available-switch-${food.id}`}
              type='checkbox'
              checked={food.available}
              onChange={() => toggleAvailable(food.id)}
              data-testid={`change-status-food-${food.id}`}
            />
            <span className='slider' />
          </label>
        </div>
      </section>
    </Container>
  );
}
