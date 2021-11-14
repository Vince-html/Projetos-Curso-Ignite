import { Flex, Image, Text } from '@chakra-ui/react';
import { useModalContext } from '../../context/modalContentx';


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

export function Card({ country }: Country) {
  const { handleCountryModal } = useModalContext();
  return (
    <Flex flexDirection='column' scale="0.8" transform='auto' _hover={{ scale: "1.0" }} cursor="pointer" onClick={() => { handleCountryModal(country) }}>

      <Image src={country.image} alt={country.city} borderRadius="10px 10px 0 0 " objectFit="cover" w="100%" maxH="250px" />
      <Flex p='5' justify='space-between' align='center' borderWidth="1px" borderColor="highlight.900" borderTop="none" borderRadius=" 0 0 10px 10px " >
        <Flex flexDirection='column' justify='space-around' >
          <Text as='a' fontWeight='semibold' fontSize='20px' >{country.city}</Text>
          <Text color='dark.info'>{country.country}</Text>
        </Flex>
        <Image src={country.flag} alt={country.country} w='30px' h='30px' objectFit='cover' borderRadius='50%' />
      </Flex>
    </Flex>
  )
}
