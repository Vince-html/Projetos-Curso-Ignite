import { Image, Flex, Text, SimpleGrid } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import React from 'react'
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import ModalCard from '../../components/Modal/ModalCard';
import client from '../../graphql/client';
import { GET_CONTINENTS } from '../../graphql/queries';
import { GetContinentsBySlugQuery } from '../../graphql/generated/graphql';


interface Country {
  id: number;
  city: string;
  country: string;
  description: string;
  flag: string;
  image: string;
}

interface ContinentProps {
  continente: {
    continentName: string,
    information: string,
    language: string,
    countries: string,
    image: string,
    data: Country[],
  }
}

export default function Continent({ continente }: ContinentProps) {
  const setContinent = continente[0];

  return (
    <>
      <Header />
      <ModalCard />
      <Flex align='flex-end'>
        <Image src={setContinent.image} alt="qualquer coisa" p='relative' objectFit="cover" zIndex='-1' w="100%" h={["200px", "200px", "180px", "300px", "350px"]} />
        <Text position="absolute" color='white' fontSize='5xl' p={["0 20px", '0 100px']} textShadow="1px 1px 3px black">{setContinent.continentName}</Text>
      </Flex>
      <Flex mt="60px">
        <SimpleGrid columns={[1, 1, 2]} p={["0 20px", '0 100px']}>
          <Text>{setContinent.information}</Text>
          <SimpleGrid columns={[3]} >
            <Flex flexDirection='column' justify='center' align='center'>
              <Text as='h3' fontSize='4xl' color="highlight.900" fontWeight='bold' marginBlockEnd="0" p='0'>{setContinent.countries}</Text>
              <Text fontWeight='bold' fontSize={['sm', 'lg']} color="dark.text">países</Text>
            </Flex>
            <Flex flexDirection='column' justify='center' align='center' >
              <Text fontSize='4xl' color="highlight.900" fontWeight='bold'>{setContinent.language}</Text>
              <Text fontWeight='bold' fontSize={['sm', 'lg']} color="dark.text">línguas</Text>
            </Flex>
            <Flex flexDirection='column' justify='center' align='center'>
              <Text fontSize='4xl' color="highlight.900" fontWeight='bold'>5 </Text>
              <Text fontWeight='bold' fontSize={['sm', 'lg']} color="dark.text">cidades +100</Text>
            </Flex>
          </SimpleGrid>
        </SimpleGrid>

      </Flex>
      <Text p={["0 20px", '0 100px']} mt='30px' fontWeight='bold' color="dark.text" fontSize="3xl">Cidades +100</Text>
      <SimpleGrid columns={[1, 1, 2, 3, 3, 5]} p={["0 20px", '0 100px']} mt="3rem" spacing="4" >
        {setContinent.data.map((country) => (
          <Card key={country.id} country={country} />
        ))}
      </SimpleGrid>
    </>
  )
}
export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: 'europe' } },
      { params: { slug: 'asia' } },
      { params: { slug: 'america' } },
      { params: { slug: 'africa' } },
      { params: { slug: 'oceania' } }
    ], fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { continents } = await client.request<GetContinentsBySlugQuery>(GET_CONTINENTS, {
    slug: `${params?.slug}`
  });
  const filterItem = continents.map(item => { return item.continentes });
  return {
    props: {
      continente: filterItem
    },
    revalidate: 60 * 60,
  }

}