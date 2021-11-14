import { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api';
import { Dispatch, SetStateAction } from 'react';
import { SingleFoodProps } from '../components/Food';

export interface FoodContextProps {
  foods: FoodProps[] | undefined;
  isOpenAdd: boolean;
  setIsOpenAdd: (Dispatch<SetStateAction<boolean>>);
  handleDeleteFood: (id: number) => Promise<void>;
  handleEditFood: (food: SingleFoodProps) => void;
  toggleAvailable: (id: number) => void;
  isOpen: boolean;
  handleAddFood: (data: any) => Promise<void>;
  setIsOpen: (Dispatch<SetStateAction<boolean>>);
  handleUpdateFood: (foodUpdate: FoodProps) => Promise<void>
  editingFood: SingleFoodProps | undefined;

}
interface FoodProviderProps {
  children: React.ReactNode
}



export type FoodProps = {
  id: number,
  name: string,
  image: string,
  description: string,
  price: number,
  available: boolean,
}
const FoodContext = createContext<FoodContextProps>({} as FoodContextProps);

export function FoodProvider({ children }: FoodProviderProps) {
  const [foods, setFoods] = useState<FoodProps[]>(() => {
    const storagedFood = localStorage.getItem('@Food:cart');
    if (storagedFood) {
      return JSON.parse(storagedFood);
    }
    return [];
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenAdd, setIsOpenAdd] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);

  const [editingFood, setEditingFood] = useState<SingleFoodProps>();

  // const [available, setAvailable] = useState(false);
  // chamada api foods
  const listFood = async () => {
    const response = await api.get('/foods');
    localStorage.setItem('@Food:cart', JSON.stringify(response.data));
    setFoods(response.data);
  };

  useEffect(() => {
    listFood();
  }, []);

  // disponivel // Indisponível
  async function toggleAvailable(id: number) {

    let foodUpdate = [...foods];
    var foodId = foodUpdate.find((food) => food.id === id);
    if (foodId?.available === true) {
      setIsAvailable(!isAvailable);
    } else
      setIsAvailable(!isAvailable);
    await api.put(`/foods/${foodId?.id}`, {
      ...foodId,
      available: isAvailable
    });
    listFood();
  }


  //update food
  async function handleUpdateFood(foodUpdate: FoodProps) {
    try {
      const foodUpdates = await api.put(`/foods/${editingFood?.id}`, {
        ...editingFood,
        ...foodUpdate,
      });
      const foodsUpdated = foods.map((f) =>
        f.id !== foodUpdates.data.id ? f : foodUpdates.data
      );

      setFoods(foodsUpdated);
      localStorage.setItem('@Food:cart', JSON.stringify(foodsUpdated));
    } catch (err) {
      console.log(err);
    }
  }

  // edit food

  const handleEditFood = (food: SingleFoodProps) => {
    setIsOpen(!isOpen);
    setEditingFood(food);
  };

  // delete food
  // chamada para excluir um produto

  async function handleDeleteFood(id: number) {
    const foodsFiltered = foods.filter((food) => food.id !== id);
    await api.delete(`/foods/${id}`);

    setFoods(foodsFiltered);
    localStorage.setItem('@Food:cart', JSON.stringify(foodsFiltered));
  }

  // add food
  const handleAddFood = async (data: FoodProps[]) => {

    try {
      const response = await api.post('/foods', {
        ...data,
        available: true,
      });

      const foodUpdate = [...foods, response.data];
      setFoods((s) => [...s, response.data]);
      localStorage.setItem('@Food:cart', JSON.stringify(foodUpdate));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <FoodContext.Provider
      value={{
        foods,
        isOpenAdd,
        setIsOpenAdd,
        handleDeleteFood,
        handleEditFood,
        toggleAvailable,
        isOpen,
        handleAddFood,
        setIsOpen,
        handleUpdateFood,
        editingFood,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
}

export function useFood() {
  const context = useContext(FoodContext);
  return context;
}
