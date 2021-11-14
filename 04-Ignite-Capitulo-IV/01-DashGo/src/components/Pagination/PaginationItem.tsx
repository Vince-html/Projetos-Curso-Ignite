import { Button } from '@chakra-ui/react';


interface PaginationItemProps {
  isCurrent?: boolean;
  number: number;
  onPageChange: (page: number) => void;
}

export function PaginationItem({
  isCurrent = false,
  number,
  onPageChange
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size='sm'
        fontSize='xs'
        width='1'
        colorScheme='pink'
        disabled
        _disabled={{
          bgColor: 'pink.500',
          cursor: 'default'
        }}>
        {number}
      </Button>
    )
  }
  return (

    <Button
      size='sm'
      fontSize='xs'
      width='1'
      bg='gray.700'
      onClick={() => onPageChange(number)}
      _hover={{
        bg: 'gray.500',
      }}>
      {number}
    </Button>
  )

}
