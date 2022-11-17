import { Box, Heading, Center, Button,  } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import DetailedCard from "../components/DetailedCard";
import pokeballImage from '../../public/pokeball.png';

type DataProps={
	name:string
	abilities:{
		ability:{
			name:string
		}
	}[]
	sprites:{
		other:{
			home:{
				front_default:string
			}
		}
	}
	types:{
		type:{
			name: string
		}
	}[]
}

export default function DetailedPoke() {
	const [data, setData] = useState<DataProps | null>(null);
	const [isLoading, setIsLoading] = useState(true);

	let { name } = useParams();

	let bgColor={
		"rock" : "rgb(182,158,49)",
		"ghost" : "rgb(112,85,155)",
		"steel" : "rgb(183,185,208)",
		"water" : "rgb(100,147,235)",
		"grass" : "rgb(116,203,72)",
		"psychic" : "rgb(251,82,132)",
		"ice":"rgb(154,214,223)",
		"dark" : "rgb(117,87,56)",
		"fairy" : "rgb(230,158,172)",
		"normal" : "rgb(170,166,127)",
		"fighting" : "rgb(193,34,57)",
		"flying" : "rgb(168,145,236)",
		"poison" : "rgb(164,62,152)",
		"ground" : "rgb(222,193,107)",
		"bug" : "rgb(167,183,35)",
		"fire" : "rgb(245,125,49)",
		"electric" : "rgb(249,207,48)",
		"dragon" : "rgb(112,55,255)",
	}

	const fetchData = async () => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
			.then((res) => res.json())
			.then((res) => {
				setData(res);
				console.log(res);
				setIsLoading(false);
				// setBgColor(res.types[0].type.name);
			});
	};

	useEffect(() => {
		setIsLoading(true);
		fetchData();
	}, []);

	if (isLoading) {
		return (
			<Box>
				<Center>
					<Heading>Loading . . .</Heading>
				</Center>
			</Box>)
	}

	console.log(data?.types[0].type.name);

	return (
		<Center color={"white"}> 
			<Box className="detailedPokeContainer" bg={bgColor[data?.types[0].type.name]} minW={"80%"}  p={"2em"} color={"#000900"} borderRadius="30px" bgImage={pokeballImage} bgRepeat={"no-repeat"} bgPos={""}>
				<Link to={'/'}>
					<Button bg={"#fff"} shadow="md"> Back</Button>
				</Link>
				<Center>
					<DetailedCard name={data?.name} abilities={data?.abilities} sprites={data?.sprites.other.home.front_default}></DetailedCard>
				</Center>
			</Box>
		</Center >
	);
}
