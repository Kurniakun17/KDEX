import { Box, Center, Flex, Grid } from "@chakra-ui/react";
import DataCard from "./DataCard";

type DataCardsListProps = {
  datas: {
    name: string;
    url: string;
  }[];
};

export default function DataCardsList({ datas }: DataCardsListProps) {
  return (
    <Center>
      <Grid gridTemplateColumns={"repeat(3,1fr)"} w={"80%"} gap={"10px"}>
          {datas.map((data, index)=>{
            return <DataCard key={index} name={data.name}></DataCard>
          })}
      </Grid>
    </Center>
  );
}
