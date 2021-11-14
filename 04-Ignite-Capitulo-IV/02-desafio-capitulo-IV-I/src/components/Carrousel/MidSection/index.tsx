import { Flex, Image, Text, Link as ChakraLink } from '@chakra-ui/react'

interface MidSection {
  continent: {
    href: string;
    continent: string;
    description: string;
    image: string;
  }
}

export function MidSection({ continent }: MidSection) {
  return (
    <Flex position='relative' justify='center' align='center'>
      <Flex position='absolute' direction='column' justify='center' align='center' p={['20', '2']}>
        <ChakraLink href={`/continentes/${continent.href}`} justify='center' align='center' textDecoration='none' _hover={{ textDecoration: 'none', color: 'highlight.900' }}>
          <Text as='h2' color='light.white' fontSize={['2xl', '2xl', '5xl']} _hover={{ color: 'highlight.900' }} textShadow="1px 1px 3px black">{continent.continent}</Text>
        </ChakraLink>
        <Text as='p' color='light.white' fontSize={['1xl', '1xl', '1xl', '2xl']} textShadow="1px 1px 3px black">{continent.description}</Text>
      </Flex>
      <Image src={continent.image} alt={continent.continent} w='100%' maxH='400px' objectFit='cover' />
    </Flex>
  )
}
