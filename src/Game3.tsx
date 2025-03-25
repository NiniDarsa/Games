import styled from 'styled-components'
import { useState } from 'react'
import Board from './Board'
import History from './History'

//FIND WINNER
function winnerfn(array:null[]|string[]){
  const winnerPosition=[
     [0,1,2],
     [3,4,5],
     [6,7,8],
     [0,3,6],
     [1,4,7],
     [2,5,8],
     [0,4,8],
     [2,4,6]
 ]

 for(let i=0;i<winnerPosition.length;i++){
  const [a,b,c]=winnerPosition[i]

  if(array[a]&&array[a]===array[b]&&array[a]===array[c]){
    return {win:array[a],colored:winnerPosition[i]}
  }
}
return null
}

//WHICH ROW AND WICH COLUMN
function ROWCOL(indx:number){
  const rowCol=[
    {row:1,col:1},
    {row:1,col:2},
    {row:1,col:3},

    {row:2,col:1},
    {row:2,col:2},
    {row:2,col:3},

    {row:3,col:1},
    {row:3,col:2},
    {row:3,col:3},

  ]

  const arr=rowCol.find((item,i)=>{
    if(i===indx){
      return item
    }
  })
return arr
  
}

function Game3() {
  const [array,setArray]=useState(new Array(9).fill(null))

  const [history,setHistory]=useState<{move:number,positions:null[]|string[],location:{row:number,col:number}}[]>([
      // {move:0,positions:[null,null,null,null,null,null,null,null,null]}
      {move:0,positions:array,location:{row:0,col:0}}
  ])
 
  //Is it X Or O?
  const[currentIndx,setCurrentIndx]=useState(0)
  const isX=currentIndx%2===0
  const XO=isX?"x":"o"

  //winner
  const [winner,setWinner]=useState<string|null|undefined>("")
  const [colored,setColored]=useState<number[]|undefined>([])
 
  const handleClick=(i:number, XO:string)=>{
     const newArr=[...array]
     if(newArr[i])return
     newArr[i]=XO
     ///
     const rowAndCol=ROWCOL(i)
     ///
     setArray(newArr)
     setCurrentIndx(currentIndx+1)
     if(rowAndCol)setHistory([...history,{move:currentIndx+1,positions:newArr,location:{row:rowAndCol.row,col:rowAndCol.col}}])  

     //Who is the Winner?!
     const winneria=winnerfn(newArr)
     setWinner(winneria?.win)
     setColored(winneria?.colored)
     
     if(history.length>8&&winner===""){
      setWinner("NOBODY")
     }
  }

  //for History (Backward and Forward)
  const prevClick=(move:number)=>{
    const newArr=history[move]
    setArray(newArr.positions)
    setWinner("")
    setColored([])
    setHistory([...history].slice(0,move+1))
    setCurrentIndx(move)
  }
  
  return (
    <Stdiv>
      <Board array={array} handleClick={handleClick} XO={XO} winner={winner} colored={colored}/>
      <History history={history} prevClick={prevClick} />
      <p style={{color:"#71f371", fontSize:"4rem"}}>{winner?`the winner is ${winner}`:""}</p>
    </Stdiv>
  )
}

export default Game3

const Stdiv=styled.div`
width: 100vw;
height: 100vh;
background-color: #2C3E50;
display: flex;
`
