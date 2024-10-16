import { useEffect, useState } from "react"
import CardSidebar from "./components/CardSidebar"
import Container from "./components/Container"
import ConteudoPrincipal from "./components/ConteudoPrincipal"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

function App() {

  const[artistas, setArtistas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/artistas')
    .then(res => res.json())
    .then(data => setArtistas(data))
    .catch(err => console.log(err))
    .finally(() => console.log('Finalizou a requisição'))
  }, [])

  return (
    <>
      <Header/>
      <Container>

        <Sidebar>
          <CardSidebar/>
          <CardSidebar/>
          <CardSidebar/>
        </Sidebar>

        <ConteudoPrincipal>
          <h1>Trap</h1>
        {
          artistas
          .filter(artista => artista.genero === "Trap")
          .map( artista => (
            <div className="bg-red-500 w-28 h-28 flex flex-col justify-around items-center">
            <p>{artista.name}</p>
            <p>{artista.genero}</p>
        </div>
          ))
        }

        <h1>Internacional</h1>
        {
          artistas
          .filter(artista => artista.genero === "Internacional")
          .map(artista => (
            <div className="bg-red-500 w-28 h-28 flex flex-col justify-around items-center">
            <p>{artista.name}</p>
            <p>{artista.genero}</p>
          </div>
          ))
        }
        

        </ConteudoPrincipal>
      </Container>
    </>
  )
}

export default App
