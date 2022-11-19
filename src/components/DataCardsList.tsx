import { Box, Center, Flex, Grid } from "@chakra-ui/react";
import DataCard from "./DataCard";
import {bgColor} from '../utils/index';

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
      <Grid gridTemplateColumns={"repeat(5,1fr)"} w={"80%"} gap={"10px"}>
        {datas.map((data, index) => {
          return <DataCard key={index} number={data.id} name={data.name} sprite={data.sprites.other.home.front_default} types={data.types}></DataCard>;
        })}
      </Grid>
    </Center>
  );
}
