import { Box, Center, Flex, Grid } from "@chakra-ui/react";
import DataCard from "./DataCard";
// import {bgColor} from '../utils/index';

type DataCardsListProps = {
  datas: {
    name: string
    abilities: {
      ability: {
        name: string
      }
    }[]
    sprites: {
      other: {
        home: {
          front_default: string
        }
      }
    }
    id:number
    types:{
      type:{
        name:string
      }
    }[]
  }[]
}

export default function DataCardsList({ datas }: DataCardsListProps) {
  return (
    <Center className="fade">
      <Grid gridTemplateColumns={["repeat(1,1fr)","repeat(2,1fr)","repeat(3,1fr)","repeat(4,1fr)","repeat(5,1fr)"]} w={"80%"} gap={"15px"}>
        {datas.map((data, index) => {
          return <DataCard key={index} number={data.id} name={data.name} sprite={data.sprites.other.home.front_default} types={data.types}></DataCard>;
        })}
      </Grid>
    </Center>
  );
}
