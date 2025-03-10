import { useEffect, useRef } from "react"

const CanvasMain=()=>{
const ref=useRef<HTMLCanvasElement>(null)


const draw=(ctx:CanvasRenderingContext2D)=>{
    ctx.beginPath();
    ctx.moveTo(20, 1000);
    ctx.lineTo(20, 20);
    ctx.lineTo(200, 20);
    ctx.lineTo(200, 80);
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

return <canvas ref={ref} width="500" height="340"  style={{position:"absolute", top:"1rem",left:"45.7rem"}}/>
}
export default CanvasMain