import GlobalStyle from "../Style/GlobalStyle"
import styled from "styled-components"

import Game1 from "./Game1"
import Game2 from "./Game2"
import { Link, Route, Routes } from "react-router-dom"
import Game3 from "./Game3"

function App() {
  return (
    <StyledApp>
       <GlobalStyle/>
      <Routes>
       <Route path="/" element={<Game1/>}/>
       <Route path="/game2" element={<Game2/>}/>
       <Route path="/game3" element={<Game3/>}/>
      </Routes>
      <StyledBtnContainer>
       <button ><Link to="/">Game N1</Link></button>
       <button ><Link to="/game2">Game N2</Link></button>
       <button ><Link to="/game3">Game N3</Link></button>
      </StyledBtnContainer>
    </StyledApp>
  )
}

export default App

const StyledApp=styled.div`
  height: 100vh;
  position: relative;
`
const StyledBtnContainer=styled.div`
    position: absolute;
    bottom: 2rem;
    left:50%;
    transform: translateX(-50%);
    button{
      padding: 1rem;
      a{
        text-decoration: none;
        color: black;
      }
    }
`
