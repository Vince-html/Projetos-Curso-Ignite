import { Dispatch, SetStateAction } from 'react';

export interface FoodContextProps {
  foods: FoodProps[];
  isOpenAdd: boolean;
  setIsOpenAdd: (Dispatch<SetStateAction<boolean>>);
  handleDeleteFood: (id: number) => Promise<void>;
  handleEditFood: (food: FoodProps[]) => void
  toggleAvailable: (id: number) => Promise<void>;
  isOpen: boolean;
  handleAddFood: (data: any) => Promise<void>
  setIsOpen: (Dispatch<SetStateAction<boolean>>);
  handleUpdateFood: (foodUpdate: FoodProps) => Promise<void>
  editingFood: FoodProps[];
}


export type FoodProps = {
  id: number,
  name: string,
  image: string,
  description: string,
  price: string,
  available: boolean,
}