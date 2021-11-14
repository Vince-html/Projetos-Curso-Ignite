import { Flex, Image, Text, Link as ChakraLink } from '@chakra-ui/react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { Pagination, Navigation } from 'swiper';
import { MidSection } from './MidSection';

SwiperCore.use([Pagination, Navigation]);

const continentes = [
  { "continent": "Europa", "href": "/europe", "description": "A Europa é, por convenção, um dos seis continentes do mundo.", "image": "/images/europe.jpg" },
  { "continent": "Ásia", "href": "/asia", "description": "A Ásia é o maior dos continentes, tanto em área como em população.", "image": "/images/asia.jpg" },
  { "continent": "America", "href": "/america", "description": "América é o continente localizado no hemisfério ocidental.", "image": "/images/northamerica.jpg" },
  { "continent": "África", "href": "/africa", "description": "A África é o terceiro continente mais extenso.", "image": "/images/africa.jpg" },
  { "continent": "Oceania", "href": "/oceania", "description": "Região geográfica composta por vários grupos de ilhas do oceano Pacífico.", "image": "/images/oceania.jpg" },

]
export function Carrousel() {
  return (
    <>
      <Flex w='100%' justify="center" align="center" m='0 auto' mt='5'>
        <Text

          fontSize={['sm', '1xl', '3xl']}
          fontWeight="bold"
          _before={{ content: '""', width: '100px', height: '2px', background: '#47585B', display: 'block', margin: '0 auto', mb: '2' }}
        >Vamos nessa? Então escolha seu continente</Text>
      </Flex>
      <Flex w='100%' justify="center" align="center" p={['0', '10']} mt='10' >
        <Swiper
          slidesPerView={1} spaceBetween={30} loop={true} pagination={{
            "clickable": true
          }} navigation={true} className="mySwiper"
        >
          {continentes.map((item) => (
            <SwiperSlide key={item.continent}>
              <MidSection continent={item} />
            </SwiperSlide>
          ))}

        </Swiper>
      </Flex>
    </>
  );
};