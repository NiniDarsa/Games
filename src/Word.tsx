import styled from "styled-components"

type Props={
    currentWord:string
    handleChange:(e:React.ChangeEvent<HTMLInputElement>)=>void
    value:string
    array:string[]
}
const Word=({currentWord,handleChange,value, array}:Props)=>{
 return(
    <BorderContainer>
    <input autoFocus value={value} onChange={handleChange}/>
     {
        currentWord.split("").map((_,indx)=>{
           return <Letter key={indx}>{array[indx]}</Letter>
        })
      }
   </BorderContainer>
 )
}
export default Word

const BorderContainer=styled.div`
    height: 5rem;
    position: absolute;
    bottom: 15rem;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    justify-content: center;
    input{
      position: absolute;
      width: 100%;
      height: 100%;
      bottom: 0rem;
      left: 50%;
      transform: translateX(-50%);
      background-color: transparent;
      border:none;
      color: transparent;
      &:focus{
        outline: none;
      }
    }
`
const Letter=styled.div`
    border-bottom:1px solid white;
    margin-right:1rem; 
    padding: 1.1rem;  
    &:last-child{
      margin-right: 0;
    }
`