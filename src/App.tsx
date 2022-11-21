import { Box } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import DetailedPoke from './pages/DetailedPoke'
import Home from './pages/Home'

type pokeDatasProps = {
  name:string
  url:string
}[]

function App() {
  const [PokeDatas, setPokeDatas] = useState<pokeDatasProps>({} as pokeDatasProps);
  const [intiliazing, setInitializing] = useState(true);

  useEffect(()=>{
    fetchPoke('https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0');
  },[])
  
  async function fetchPoke(url: string) {
    fetch(url).then((res) => res.json())
        .then((res) => {
            setInitializing(true)
            setPokeDatas(res.results)
            return res
        }).then((res)=>setInitializing(false)).catch((error) => {
            console.log(error);
        })
  }

  if(intiliazing){
    return <Box>Loading . . .</Box>
  }

  return (
    <Box className="App" minH="100vh" w={"100%"} bgGradient="linear-gradient(90deg, rgba(111,103,252,1) 0%, rgba(43,82,78,1) 0%, rgba(35,97,110,1) 100%)" color={"#d9d9d9"} >
      <header>
        <Navbar></Navbar>
      </header>
      <main style={{padding:"12px"}}>
        <Routes>
          <Route path='/detailed/:name' element={<DetailedPoke/>}></Route>
          <Route path='/' element={<Home PokeDatas={PokeDatas}></Home>}></Route>
        </Routes>
      </main>
    </Box>
  )
}

export default App
