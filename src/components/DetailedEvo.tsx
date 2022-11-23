import { Box } from "@chakra-ui/react";
import React, {useState, useEffect} from "react";
import Axios from "axios";
import DataCard from "./DataCard";

type speciesDataProps={
    speciesData:{
        evolution_chain:{
            url:string
        }
    }
}

export default function DetailedEvo({speciesData}:speciesDataProps) {
    const [evolutionChain, setEvolutionChain] = useState({});
    const [firstSpecies, setFirstSpecies] = useState({});
    const [secondSpecies, setSecondSpecies] = useState({});
    const [thirdSpecies, setThirdSpecies] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetch = async ()=>{
            let data = await fetchEvo();
            setLoading(false)
        }
        fetch()
    }, []);

    const fetchEvo = async () => {
        Axios.get(speciesData.evolution_chain.url)
            .then(async (res) => {
                let chain = res.data.chain
                setEvolutionChain(chain);
                console.log(chain);
                let data = await FetchPokeSpecies(chain.species.name)
                setFirstSpecies(data);
                data = await FetchPokeSpecies(chain.evolves_to[0].species.name)
                setSecondSpecies(data)
                data = await FetchPokeSpecies(chain.evolves_to[0].evolves_to[0].species.name)
                setThirdSpecies(data)
                data = await FetchPokeSpecies(chain.species.name)
            })
            .catch((e) => {
                console.log(e.message);
            });
    };

    const FetchPokeSpecies = async(name:string)=>{
        const response = await Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res)=>res.data)
        return response
    }

    if(loading){
        return <Box>None</Box>
    }

    if(!firstSpecies)return <Box>None</Box>
    if(!secondSpecies)return <Box>None</Box>
    if(!thirdSpecies)return <Box>None</Box>

    console.log("You made it");

    return (
        <Box>
            {/* <DataCard name={firstSpecies.name} number={firstSpecies.number} sprite={firstSpecies.sprite.other.home.front_default} types={""}></DataCard> */}
        </Box>
    );
}
