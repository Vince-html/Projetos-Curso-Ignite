/* eslint-disable @next/next/no-img-element */
import { Image, Flex, Icon, Link as ChakraLink } from "@chakra-ui/react"
import { useRouter } from 'next/router'
import { IoIosArrowBack } from "react-icons/io";



export function Header() {
  const router = useRouter();
  console.log(router.asPath)

  return (
    <Flex w="100%" maxH="100px" m='0 auto' p='3' justify='center' position='relative'>
      {router.asPath !== '/' &&
        <ChakraLink href='/' position='absolute' p='2' left='10%' outline='none' _focus={{ outline: 'none' }} >
          <Icon as={IoIosArrowBack} fontSize='30px' />
        </ChakraLink>
      }
      <Image src='/logo.svg' alt="Logo da pagina" />
    </Flex>
  )
}
