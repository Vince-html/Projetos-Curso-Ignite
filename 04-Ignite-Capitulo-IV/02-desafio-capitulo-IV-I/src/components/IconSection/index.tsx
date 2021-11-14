import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { BiDrink } from "react-icons/bi";
import { IconComponent } from './IconComponent';
import { FaUmbrellaBeach, FaMonument, FaGlobeAmericas } from "react-icons/fa";
import { BsBuilding } from "react-icons/bs";

export function IconSection() {
  return (
    <SimpleGrid as='ul' columns={[2, 2, 5]} p='10' m='0 auto' >
      <IconComponent icon={BiDrink}>vida nortuna</IconComponent>
      <IconComponent icon={FaUmbrellaBeach}>praias</IconComponent>
      <IconComponent icon={BsBuilding}>moderno</IconComponent>
      <IconComponent icon={FaMonument}>clássico</IconComponent>
      <IconComponent icon={FaGlobeAmericas}>e mais...</IconComponent>

    </SimpleGrid>
  )
}
