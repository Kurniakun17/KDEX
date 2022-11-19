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

	const fetchData = async () => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
			.then((res) => res.json())
			.then((res) => {
				setData(res);
				console.log(res);
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
			<Box className="detailedPokeContainer" bg={bgColor[data.types[0].type.name]} minW={"80%"}  p={"2em"} color={"#000900"} borderRadius="30px" bgImage={pokeballImage} bgRepeat={"no-repeat"}>
				<BubblyLink to={'/'}  colorEnd="#040406">
					<Button bg={"#fff"} shadow="md"> Back</Button>
				</BubblyLink>
				<Center>
					<DetailedCard name={data.name} abilities={data.abilities} sprites={data.sprites.other.home.front_default}></DetailedCard>
				</Center>
			</Box>
		</Center >
	);
}