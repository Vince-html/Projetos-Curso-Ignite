import { createContext, Dispatch, ReactNode, useContext, useState } from 'react'
import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/hooks'


interface Country {

  city: string;
  country: string;
  description: string;
  flag: string;
  image: string;
  id: number;

}


interface ModalProviderProps {
  children: ReactNode;
}

interface ModalContextData {
  countrySelect: Country;
  handleCountryModal: (country: Country) => void;
  disclosure: UseDisclosureReturn;
};

const ModalContext = createContext({} as ModalContextData);




export function ModalProvider({ children }: ModalProviderProps) {
  const disclosure = useDisclosure();
  const [countrySelect, setCountrySelect] = useState<Country | undefined>();


  function handleCountryModal(country: Country) {
    disclosure.onOpen();
    setCountrySelect(country);
  }

  return (
    <ModalContext.Provider value={{ disclosure, handleCountryModal, countrySelect }}>
      {children}
    </ModalContext.Provider>
  )

}

export const useModalContext = () => useContext(ModalContext);