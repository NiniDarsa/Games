import { useEffect, useRef } from "react"

const CanvasHead=()=>{
const ref=useRef<HTMLCanvasElement>(null)


const draw=(ctx:CanvasRenderingContext2D)=>{
    ctx.beginPath();
    ctx.arc(95,50,40,0,2*Math.PI);
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

return <canvas ref={ref} width="150" height="100"  style={{position:"absolute", top:"8rem",left:"56rem"}}/>
}
export default CanvasHead