import { Flex, Avatar, Box, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

interface ProfileProps {
  showProfileData?: boolean;

}


export function Profile({ showProfileData = true }: ProfileProps) {
  const { user } = useContext(AuthContext)
  return (
    <Flex
      align="center"
    >
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>{user?.email || "hello"}</Text>
          <Text
            color="gray.300"
            fontSize="small"
          >
            {user?.email || "hello"}
          </Text>

        </Box>
      )}
      <Avatar size="md" name="Vicente Augusto" src="https://github.com/vince-html.png" />
    </Flex>
  )
}