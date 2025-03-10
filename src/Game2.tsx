import styled from "styled-components"
import Man from "./Man"
import Letters from "./Letters"
import { useEffect, useState } from "react"
import Messages from "./Messages"
import Word from "./Word"

const Game2=()=>{
    const [words,_]=useState([
      {question:"what is the type of true?",answer:"boolean"},
      {question:"Is javascript a statically typed or a dynamically typed language?",answer:"dynamically"}, 
      {question:"what called a function that will be executed after another function gets executed?",answer:"callback"},
      {question:"in js where is yield keyword?",answer:"generators"}])
    const [indx,setIndx]=useState(0)
    const currentWord=words[indx].answer
    const currentQuestion=words[indx].question
   
    //Correct letters' indexes container
    const [letterIndxes,setLetterIndxes]=useState<number[]>([])

    // letters Array which you want to show to the players
    const [array,setArray]=useState<string[]>([])
    
    //Wrong Letters Container
    const [wrong,setWrong]=useState<string[]>([])
  
    
  // messages
    const [error,setError]=useState("")
    const [correct,setCorrect]=useState("")
    const [finish,setFinish]=useState(false)

  //Show Error Messages:
  const ShowMessage=(newIndxs:number[],newLetter:string)=>{
        //if you type one letter second time
        if(containsAny(letterIndxes,newIndxs)){
          setError(`you've already typed this letter-${newLetter}`)
          setTimeout(()=>{
           setError("")
          },1000)
        }
  
       //if you typed wrong letter
        if(!currentWord.includes(newLetter)&&!wrong.includes(newLetter)){
          if(wrong[0]===undefined){return setWrong([newLetter])}
          setWrong([...wrong,newLetter])
        }
  
      //if you use all possibility
      if(wrong.length===5){
        setError("You can't write any letters anymore")
        setTimeout(()=>{
          setError("")
          setFinish(true)
          return
        },3000)
      }
    }
  //Show Correct Messages:
   const ShowCorrect=()=>{
     if(array.join("")===currentWord){
      setCorrect("Excelent!")
      setTimeout(()=>{
        setCorrect("")
        if(indx===words.length-1){
          setCorrect(`YOY WON, Your score is ${words.length}`)
          return setFinish(true)
        }
        setIndx(indx+1)
        setWrong([])
        setValue("")
        setArray([])
        setLetterIndxes([])
      },1000)
     }
   }

  //find all indexes when you type a letter
   function getAllIndexes(arr:string[], val:string) {
      var indexes = []
      for(var i = 0; i < arr.length; i++)
          if (arr[i] === val)
              indexes.push(i);
      return indexes;
  }

  //if one array includes another array
  function containsAny(arr1:number[], arr2:number[]) {
    return arr1.some(item => arr2.includes(item));
  }
 
//Input value
  const[value,setValue]=useState("")
  const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    setValue(e.target.value)
  }

  useEffect(()=>{
      let newLetter=value&&value.split("")[value.length-1]
      const newIndxs=getAllIndexes(currentWord.split(""),newLetter)

      //Show Error Messages:
      ShowMessage(newIndxs,newLetter)
      

     //if you typed correct letter
      setLetterIndxes([...letterIndxes,...newIndxs])
    //create array which you want to show to the player
      const arr=[...array]//create copy of existing array(shallow copy)
      newIndxs.forEach((indx)=>{
          arr[indx]=newLetter //change copied array
      })
      setArray(arr)  

    },[value])

  useEffect(()=>{
      //show Correct Messages:
      ShowCorrect()
    },[array])

  return(   
    <StyledGame>
       <h1>Hangman</h1>
       <p>Find a hidden word - Enter a letter</p>
       <Man wrong={wrong}/>
       <Letters wrong={wrong}/>
       <StyledQuestion>Question: {currentQuestion}</StyledQuestion>
       <Word currentWord={currentWord} handleChange={handleChange} value={value} array={array}/>
       <Messages error={error} correct={correct} finish={finish}/>
    </StyledGame>
  )
}
export default Game2

const StyledGame=styled.div`
    height: 100vh;
    padding: 2rem;
    font-size: 2rem;
    background-color: #2C3E50;
    color: white;
    position: relative;
    text-align: center;  
`
const StyledQuestion=styled.div`
    position:absolute;
    bottom: 25rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 3rem;
`

