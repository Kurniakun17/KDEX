import { extendTheme } from "@chakra-ui/react"

export const bgImg={
    "rock" : '/assets/rock.svg',
    "ghost" : '/assets/ghost.svg',
    "steel" : '/assets/steel.svg',
    "water" : '/assets/water.svg',
    "grass" : '/assets/grass.svg',
    "psychic" : '/assets/psychic.svg',
    "ice": '/assets/ice.svg',
    "dark" : '/assets/dark.svg',
    "fairy" : '/assets/fairy.svg',
    "normal" : '/assets/normal.svg',
    "fighting" : '/assets/fighting.svg',
    "flying" : '/assets/flying.svg',
    "poison" : '/assets/poison.svg',
    "ground" : '/assets/ground.svg',
    "bug" : '/assets/bug.svg',
    "fire" : '/assets/fire.svg',
    "electric" : '/assets/electric.svg',
    "dragon" : '/assets/dragon.svg',
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