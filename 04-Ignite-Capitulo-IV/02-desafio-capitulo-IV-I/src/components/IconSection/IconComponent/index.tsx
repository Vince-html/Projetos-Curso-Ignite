import { Icon, Flex, Text, Tooltip } from '@chakra-ui/react'
import React, { ElementType } from 'react'

interface IconComponentProps {
  children: string;
  icon: ElementType;
}



export function IconComponent({ children, icon }: IconComponentProps) {
  return (
    <Flex as="li" align="center" flexDirection='column' mt='10' listStyleType="initial" >
      <Tooltip label={children}>
        <span>
          <Icon as={icon} fontSize="100" color='highlight.900' display={['none', "none", 'block']} />
        </span>
      </Tooltip>
      <Text fontSize="20" fontWeight='semibold' color='dark.text' textAlign='center'>{children}</Text>
    </Flex>
  )
}
