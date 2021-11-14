import { Header } from '../../components/Header';
import { Food } from '../../components/Food';
import { ModalAddFood } from '../../components/ModalAddFood';
import { ModalEditFood } from '../../components/ModalEditFood';
import { FoodsContainer } from './styles';
import { useFood } from '../../Hooks/useFood';

export function Dashboard() {
  const { foods, isOpen, setIsOpen, isOpenAdd, setIsOpenAdd } = useFood();

  return (
    <>
      <Header />
      <ModalAddFood isOpenAdd={isOpenAdd} setIsOpenAdd={setIsOpenAdd} />
      <ModalEditFood isOpen={isOpen} setIsOpen={setIsOpen} />

      <FoodsContainer data-testid='foods-list'>
        {foods && foods.map((food) => <Food key={food.id} food={food} />)}
      </FoodsContainer>
    </>
  );
}
