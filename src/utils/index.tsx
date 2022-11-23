import { extendTheme } from "@chakra-ui/react"
import bugImg from '../assets/bug.svg';
import darkImg from '../assets/dark.svg';
import dragonImg from '../assets/dragon.svg';
import electricImg from '../assets/electric.svg';
import fairyImg from '../assets/fairy.svg';
import fightingImg from '../assets/fighting.svg';
import fireImg from '../assets/fire.svg';
import flyingImg from '../assets/flying.svg';
import ghostImg from '../assets/ghost.svg';
import grassImg from '../assets/grass.svg';
import groundImg from '../assets/ground.svg';
import iceImg from '../assets/ice.svg';
import normalImg from '../assets/normal.svg';
import poisonImg from '../assets/poison.svg';
import psychicImg from '../assets/psychic.svg';
import rockImg from '../assets/rock.svg';
import steelImg from '../assets/steel.svg';
import waterImg from '../assets/water.svg';

export const bgImg={
    "rock" : rockImg,
    "ghost" : ghostImg,
    "steel" : steelImg,
    "water" : waterImg,
    "grass" : grassImg,
    "psychic" : psychicImg,
    "ice": iceImg,
    "dark" : darkImg,
    "fairy" : fairyImg,
    "normal" : normalImg,
    "fighting" : fightingImg,
    "flying" : flyingImg,
    "poison" : poisonImg,
    "ground" : groundImg,
    "bug" : bugImg,
    "fire" : fireImg,
    "electric" : electricImg,
    "dragon" : dragonImg,
}

export const bgColor={
    "rock" : "rgb(182,158,49)",
    "ghost" : "rgb(112,85,155)",
    "steel" : "rgb(183,185,208)",
    "water" : "rgb(100,147,235)",
    "grass" : "rgb(64,176,136)",
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
    "electric" : "rgb(242, 205, 56)",
    "dragon" : "rgb(112,55,255)",
}

export const theme = extendTheme({
    fonts: {
        heading: `'baloo-2', sans-serif`,
        body: `'baloo-2', sans-serif`,
    },
})

export function upperCase(x:string){
    return x[0].toUpperCase() + x?.substring(1)
}