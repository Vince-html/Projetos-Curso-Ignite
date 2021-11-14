import { Box, Stack, Text, Link, Icon } from '@chakra-ui/react';
import { RiContactsLine, RiDashboardLine } from 'react-icons/ri';
import { ReactNode } from 'react';


interface NavSectionProps {
  title: string;
  children: ReactNode;
}


export function NavSection({ title, children }: NavSectionProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small" >{title}</Text>
      {children}
    </Box>
  )
}