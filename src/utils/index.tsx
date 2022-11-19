import { extendTheme } from "@chakra-ui/react"
import bugImg from '../assets/bug.svg';

export const bgColor={
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

export const bgImg={
    "rock" : "rgb(112,85,155)",
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
    "bug" : bugImg,
    "fire" : "rgb(245,125,49)",
    "electric" : "rgb(249,207,48)",
    "dragon" : "rgb(112,55,255)",
}

export const theme = extendTheme({
    fonts: {
        heading: `'baloo-2', sans-serif`,
        body: `'baloo-2', sans-serif`,
    },
})

export function upperCase(x:string|undefined){
    return x[0].toUpperCase() + x?.substring(1)
}