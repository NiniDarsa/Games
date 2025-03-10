import styled from "styled-components"
import Container from "./Container"
import Option from "./Option"
import { useState } from "react"

const Game1=()=>{
    const[open,setOpen]=useState(true)
    const handleClick=()=>{
      setOpen(prev=>!prev)
    }
  
    const[difficulty,setDifficulty]=useState("easy")
    const handleChange=(e:React.ChangeEvent<HTMLSelectElement>)=>{
        setDifficulty(e.target.value)
    }
 return(
    <StyledGame>
      <Option open={open} difficulty={difficulty} handleChange={handleChange}/>
     <Container handleClick={handleClick} difficulty={difficulty}/>
    </StyledGame>
 )
}
export default Game1

const StyledGame=styled.div`
     height: 100vh;
     position: relative;
`