import { Flex, Button, Stack, Text } from '@chakra-ui/react'
import { Carrousel } from '../components/Carrousel';
import { Header } from '../components/Header';
import { IconSection } from '../components/IconSection';
import { Section } from '../components/Section';


export default function Home() {
  return (
    <main>
      <Header />
      <Section />
      <IconSection />
      <Carrousel />
    </main>
  );
}
