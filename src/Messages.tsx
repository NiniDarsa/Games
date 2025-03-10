import styled from "styled-components"

type Props={
    error:string
    correct:string
    finish:boolean
}
const Messages=({error,correct,finish}:Props)=>{
    return(
        <>
        {error&&<ErrorMessage>{error}</ErrorMessage>}
        {correct&&<CorrectMessage>{correct}</CorrectMessage>}
        {finish&&<Finish>
        <button onClick={()=>window.location.reload()}>reload</button>
        </Finish>
        }
        </>
    )
}
export default Messages

const ErrorMessage=styled.div`
  background-color: red;
  padding: 1rem;
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`
const CorrectMessage=styled.div`
  padding: 1rem;
  position: absolute;
  bottom: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: green;
`
const Finish=styled.div`
      position: absolute;
      top:55%;
      left: 50%;
      transform: translate(-50%,-50%);
      font-size: 2rem;
      padding: 2rem;
      background-color: green;
      button{
        cursor: pointer;
        padding: 1rem;
      }
`