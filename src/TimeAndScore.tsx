import { useEffect} from "react"
import styled from "styled-components"

type Props={
  score:number
  time:number
  handleTime:()=>void
}

const TimeAndScore=({score,time,handleTime}:Props)=>{
    useEffect(()=>{
        const interval=setInterval(()=>{
            if(time===0){
                return
            }else{
             handleTime()}
            },1000)
         return ()=>clearInterval(interval)
    },[time])
  
   
    return (
        <StyledTime>
            <div>
                <p>Time left:</p>
                <p>{time}s</p>
            </div>

            <div>
                <p>Score:</p>
                <p>{score}</p>
            </div>
          </StyledTime>
    )
}
export default TimeAndScore

const StyledTime=styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    div{
        display: flex;
        p:first-child{
            padding-right: 1rem;
        }
    }
`