import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import { Modal } from '../Modal';
import Input from '../Input';
import { FoodProps, useFood } from '../../Hooks/useFood';
import { createRef } from 'react';
import { FormHandles } from '@unform/core';

interface ModalAddProps {
  isOpenAdd: boolean;
  setIsOpenAdd: (isOpenAdd: boolean) => void | (() => void);
}


export function ModalAddFood({ isOpenAdd, setIsOpenAdd }: ModalAddProps) {
  const { handleAddFood } = useFood();
  const formRef = createRef<FormHandles>();
  const handleSubmit = async (data: FoodProps[]) => {
    await handleAddFood(data);
    setIsOpenAdd(!isOpenAdd);
  };

  return (
    <Modal isOpen={isOpenAdd} setIsOpen={setIsOpenAdd}>
      <Form ref={formRef} onSubmit={handleSubmit} >
        <h1>Novo Prato</h1>
        <Input name='image' placeholder='Cole o link aqui' />

        <Input name='name' placeholder='Ex: Moda Italiana' />
        <Input name='price' placeholder='Ex: 19.90' />

        <Input name='description' placeholder='Descrição' />
        <button type='submit' data-testid='add-food-button'>
          <p className='text'>Adicionar Prato</p>
          <div className='icon'>
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}
