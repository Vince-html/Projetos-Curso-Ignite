import { Flex, Image, Text, HTMLChakraProps, chakra } from '@chakra-ui/react'
import React from 'react'
import { HTMLMotionProps, motion } from "framer-motion";


type Merge<P, T> = Omit<P, keyof T> & T;

type MotionBoxProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;
export const MotionBox: React.FC<MotionBoxProps> = motion(chakra.div);


export function Section() {
  return (
    <Flex as='section' flexDirection='row'>

      <Image src="/Background.png" alt='background de ceu' p='relative' zIndex='-1' w="100%" h={["200px", "200px", "180px", "300px", "350px"]} />

      <Flex position='absolute' align="start" justify="space-around" mt={["5", "5", "10", '20']} w='100%' p={["0 20px", '0 100px']} >
        <Flex maxWidth='460px' flexDirection='column'>
          <Text as='h1' fontSize={['2xl', '2xl', '2xl', '2xl', '4xl']} fontWeight='bold' color='light.white' textAlign={['center', 'center', 'left']} >
            5 Continentes,
            infinitas possibilidades.
          </Text>
          <Text as='p' color='light.info' mt='2' textAlign={['center', 'center', 'left']} >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Flex>
        <MotionBox
          as="aside"
          animate={{
            scale: [1, 2, 2, 1, 1],
            translateX: [1500, 0],
            opacity: [0, 1],

          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: 0,
            repeatType: "loop",
            delay: 1
          }}

        >
          <Image src="/Airplane.svg" alt='avião com nuvens' display={['none', 'none', 'block']} />
        </MotionBox>
      </Flex>
    </Flex>
  )
}
