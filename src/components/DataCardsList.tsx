import { Box, Center, Flex, Grid } from "@chakra-ui/react";
import DataCard from "./DataCard";

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
  }[]
}

export default function DataCardsList({ datas }: DataCardsListProps) {
  return (
    <Center>
      <Grid gridTemplateColumns={"repeat(3,1fr)"} w={"80%"} gap={"10px"}>
        {datas.map((data, index) => {
          return <DataCard key={index} number={index} name={data.name} sprite={data.sprites.other.home.front_default}></DataCard>;
        })}
      </Grid>
    </Center>
  );
}
