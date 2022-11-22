import { Box, Heading, Center, Button,  } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {BubblyLink} from 'react-bubbly-transitions'
import DetailedCard from "../components/DetailedCard";
import pokeballImage from '../assets/pokeball.png';
import {bgColor} from '../utils/index';


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
	const [data, setData] = useState<DataProps>({} as DataProps);
	const [isLoading, setIsLoading] = useState(true);

	let { name } = useParams();
	let colour="";

	const fetchData = async () => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
			.then((res) => res.json())
			.then((res) => {
				setData(res);
				console.log(res);
				colour=bgColor[res.types[0].type.name as keyof typeof bgColor];
				setIsLoading(false);
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


	return (
		<Center color={"white"}> 
			<Box className="detailedPokeContainer" bg={bgColor[data.types[0].type.name as keyof typeof bgColor]} minW={"80%"}  p={"1em"} color={bgColor[data.types[0].type.name as keyof typeof bgColor]} borderRadius="30px" bgImage={pokeballImage} bgPos={"-170% 0%"} bgSize={"500px"} bgRepeat={"no-repeat"}>
				<Box bgColor={"#FFF"} display="inline-block" p="5px 15px" borderRadius={"6px"}>
					<BubblyLink to="/" colorStart={bgColor[data.types[0].type.name as keyof typeof bgColor]} colorEnd="linear-gradient(90deg, rgba(111,103,252,1) 0%, rgba(43,82,78,1) 0%, rgba(35,97,110,1) 100%)">
						Back
					</BubblyLink>
				</Box>
				<Center>
					<DetailedCard name={data.name} abilities={data.abilities} sprites={data.sprites.other.home.front_default}></DetailedCard>
				</Center>
			</Box>
		</Center>
	);
}
