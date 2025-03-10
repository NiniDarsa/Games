import styled from "styled-components"
import CanvasHead from "./CanvasHead"
import CanvasMain from "./CanvasMain"
import CanvasBody from "./CanvasBody"
import CanvasLeg1 from "./CanvasLeg1"
import CanvasLeg2 from "./CanvasLeg2"
import CanvasHand1 from "./CavnvasHand1"
import CanvasHand2 from "./CanvasHand2"

type Props={
    wrong:string[]
}
const Man=({wrong}:Props)=>{
    return(
        <StyledContent>
         <CanvasMain/>
         {wrong.length>0&&wrong[0]!==undefined?<CanvasHead/>:""}
         {wrong.length>1?<CanvasBody/>:""}
         {wrong.length>2?<CanvasLeg1/>:""}
         {wrong.length>3?<CanvasLeg2/>:""}
         {wrong.length>4?<CanvasHand1/>:""}
         {wrong.length>5?<CanvasHand2/>:""}
        </StyledContent>
    )
}
export default Man

const StyledContent=styled.div`
    position: relative;
`