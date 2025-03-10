import { useEffect, useState } from "react"
import TimeAndScore from "./TimeAndScore"
import styled from "styled-components"
import WordContainer from "./WordContainer"
import Message from "./Message"
import { CiSettings } from "react-icons/ci";

type Props={
    handleClick:()=>void
    difficulty:string
}
const Container=({handleClick,difficulty}:Props)=>{
    const[words,setWords]=useState<string[]>([])
    const[indx,setIndx]=useState(0)
    const currentWord=words[indx]

    //input value
    const[value,setValue]=useState("")
    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    }
 
     //Score and Time
    const[time,setTime]=useState(10)
    const hanldeTime=()=>{
        setTime(time-1)
    }

    const[score,setScore]=useState(0)
    if(value===currentWord){
        setValue("")
        setScore(score+1) 
        setIndx(indx+1) 
        setTime(time+2)
      }
  

    //based on difficulty
    useEffect(()=>{
        if(difficulty==="easy"){
            setWords(["pizza","enjoy","radio","station"])
            setTime(10)
           }else if(difficulty==="medium"){
              setWords(["futuristic","backbone","photograph","alias","knell"])
              setTime(8)
              setValue("")
           }else{
               setWords(["accommodate","aggressive","fahrenheit","entrepreneur"])
               setTime(7)
               setValue("")
           }
    },[difficulty])
  
   
    return(
        <StyledContainer>
         
         <StyledMain>
          {time===0&&<Message score={score} message="Time run out"/>||
          words.length===indx&&<Message score={score} message="Great! You are the winner!"/>||
          <>
          <h2><>👩‍💻</>Spead Game<>👩‍💻</></h2>
          <TimeAndScore score={score} time={time} handleTime={hanldeTime}/>
          <WordContainer currentWord={currentWord} value={value} handleChange={handleChange}/></>
          }
          {}
         </StyledMain>
         <StyledOption onClick={handleClick}><CiSettings /></StyledOption>
        </StyledContainer>
    )
}
export default Container

const StyledContainer=styled.div`
    height: 100vh;
    width: 100%;
    font-size: 2rem;
    background-color: #2C3E50;
    color: white;
    position: relative;
`;
const StyledMain=styled.div`
    background-color: #34495E;
    width: 40%;
    box-shadow: 1px 1px 15px 1px #212e3c;
    border-radius: .2rem;
    padding: 1rem 2rem;
    margin: auto;
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: center;

    h2{
        background-color: #243342;
        width: 100%;
        margin-bottom: 1rem;
        padding: 1rem;
        text-align: center;
    }
`;
const StyledOption=styled.button`
   position:absolute;
   bottom:1rem;
   left:1rem;
   padding:.5rem;
   display: flex;
   justify-content: center;
   align-items: center;
   cursor: pointer;
`