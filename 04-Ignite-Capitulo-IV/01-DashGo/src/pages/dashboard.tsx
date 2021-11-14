import { Flex, SimpleGrid, Box, Text, theme } from '@chakra-ui/react';
import { Header } from '../components/Header';
import dynamic from 'next/dynamic'
import { ApexOptions } from 'apexcharts';
import { SideBar } from '../components/SideBar';
import { withSSRGuest } from '../utils/withSSRGuest';



const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
});

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-10-28T00:00:00.000Z',
      '2021-10-29T00:00:00.000Z',
      '2021-10-30T00:00:00.000Z',
      '2021-10-31T00:00:00.000Z',
      '2021-11-02T00:00:00.000Z',
    ]
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    }
  }
}

const series = [{
  name: 'series', data: [31, 120, 10, 28, 64]
}]

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />
        <SimpleGrid flex='1' gap="4" minChildWidth="320px" align="flex-start">
          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}

          >
            <Text fontSize="lg" mb="4">Incritos da semana</Text>
            <Chart
              options={options}
              series={series}
              type="area" height={160} />
          </Box>
          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}

          >
            <Text fontSize="lg" mb="4">Taxa de abertura</Text>
            <Chart
              options={options}
              series={series}
              type="area" height={160} />
          </Box>

        </SimpleGrid>
      </Flex>
    </Flex>
  )
}


// export const getServerSideProps = withSSRGuest(async (ctx) => {
//   return {
//     props: {}
//   }
// })