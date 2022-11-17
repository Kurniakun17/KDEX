import { Box } from '@chakra-ui/react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import DetailedPoke from './pages/DetailedPoke'
import Home from './pages/Home'

function App() {
  return (
    <Box className="App" minH="100vh" w={"100%"} bgColor="#040406" color={"#d9d9d9"}>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Routes>
          <Route path='/detailed/:name' element={<DetailedPoke/>}></Route>
          <Route path='/' element={<Home></Home>}></Route>
        </Routes>
      </main>
    </Box>
  )
}

export default App
