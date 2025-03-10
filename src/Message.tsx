import styled from "styled-components"

type Props={
    score:number
    message:string
}

const Message=({score,message}:Props)=>{
    const handleClick=()=>{
      window.location.reload();
     }
    return(
     <StyledMessage>
      <p>{message}</p>
      <p>your final score is {score}</p>
      <button onClick={handleClick}>reload</button>
     </StyledMessage>
    )
}
export default Message

const StyledMessage=styled.div`
    height: 15rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    button{
        padding: 0.2rem 1rem;
        cursor: pointer;
    }
`