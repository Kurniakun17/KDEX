import { Box } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import DataCardsList from './components/DataCardsList'
import {Routes, Route} from 'react-router-dom'

type pokeDatas={
  name: string
  url: string
}

function App() {
  const [datas, setDatas] = useState([]);
  const [nextUrl, setNextUrl] = useState<string|null>(null);
  const [prevtUrl, setPrevtUrl] = useState<string|null>(null);

  async function fetchPoke(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=99&offset=0').then((res)=>res.json())
    .then((res)=>{
      setDatas(res.results)
      setNextUrl(res.next)
      setPrevtUrl(res.previous)
      console.log(res)
    })
  }

  useEffect(()=>{
    fetchPoke();
  },[])

  if(datas.length===0){
    return <h1>Kosong!</h1>
  }

  return (
    <Box className="App" w={"100%"} bgColor="#040406" color={"#d9d9d9"}>
      <Routes>
        <Route path='/detail/:name'></Route>
        <Route path='/' element={<DataCardsList datas={datas}></DataCardsList>}></Route>
      </Routes>
      
    </Box>
  )
}

export default App
