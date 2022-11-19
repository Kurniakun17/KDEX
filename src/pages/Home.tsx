import { Box, Center, Heading } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import DataCardsList from '../components/DataCardsList'

type pokeDatas={
    name: string
    url: string
}[]

type PokeData={
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
}[]

export default function Home() {
    const [nextUrl, setNextUrl] = useState<string|null>(null);
    const [prevtUrl, setPrevtUrl] = useState<string|null>(null);
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);

    async function fetchPoke(){
        fetch('https://pokeapi.co/api/v2/pokemon?limit=30&offset=0').then((res)=>res.json())
        .then((res)=>{
            setNextUrl(res.next)
            setPrevtUrl(res.previous)
            getPoke(res.results);
            setLoading(false)
        }).catch((error)=>{
            console.log(error);
        })
    }

    const getPoke=async(datas:pokeDatas)=>{
        datas.map(async(data)=>{
            fetch(data.url).then((res)=>res.json())
            .then((res)=>{
                setPokemons((state)=>{
                    return [...state, res]
                })
            })
        })
    }

    useEffect(()=>{
        fetchPoke();
    },[]);

    if(pokemons.length<30){
        return <h1>Kosong!</h1>
    }

    console.log(pokemons)

    return (
        <Box>
            <Heading>Pokédex</Heading>
            <DataCardsList datas={pokemons}></DataCardsList>
        </Box>
    )
}
