import { useEffect, useRef } from "react"

const CanvasHand2=()=>{
const ref=useRef<HTMLCanvasElement>(null)


const draw=(ctx:CanvasRenderingContext2D)=>{
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(70,20);
    ctx.strokeStyle = "white";
    ctx.stroke();
}

useEffect(()=>{
    const canvas=ref.current
    if (canvas) {
        const context = canvas.getContext('2d');
        if (context) {
            draw(context)
        }
      }
   ;
   
},[draw])

return <canvas ref={ref} width="150" height="100"  style={{position:"absolute", top:"18rem",left:"58.6rem"}}/>
}
export default CanvasHand2