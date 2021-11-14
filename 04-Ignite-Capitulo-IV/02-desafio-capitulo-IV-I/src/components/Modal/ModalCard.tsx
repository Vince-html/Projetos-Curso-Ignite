import { useModalContext } from '../../context/modalContentx';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex, Image, Text
} from "@chakra-ui/react"


interface Country {
  country: {
    city: string;
    country: string;
    description: string;
    flag: string;
    image: string;
    id: number;
  }
}


export default function ModalCard() {
  const { disclosure, countrySelect } = useModalContext();

  const country = countrySelect;

  if (!countrySelect) {
    return null
  }


  return (
    <Modal isOpen={disclosure.isOpen} onClose={disclosure.onClose} >
      <ModalOverlay />
      <ModalContent maxW='40rem' borderRadius="20px">
        <Flex >
          <Image src={country?.image} alt='/' objectFit="cover" borderRadius="10px 10px 0 0 " w="100%" maxH="auto" position='relative' />
          <ModalHeader position='absolute' color='white' fontSize='3xl' textShadow="1px 1px 3px black">{country?.city}</ModalHeader>
        </Flex>
        <ModalCloseButton color='black' bg='highlight.900' textShadow="1px 1px 3px black" />
        <ModalBody>
          <Flex p='5' flexDirection='column'  >
            <Flex flexDirection='row' justify='space-between' >
              <Text as='a' fontWeight='semibold' fontSize='20px' >{country.country}</Text>
              <Image src={country.flag} alt='' w='30px' h='30px' objectFit='cover' borderRadius='50%' />
            </Flex>
            <Text color='dark.info' mt='3'>{country.description}</Text>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button bg="highlight.900" mr={3} onClick={disclosure.onClose}>
            Fechar
          </Button>

        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
