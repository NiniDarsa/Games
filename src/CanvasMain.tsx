import { useEffect, useRef } from "react";
import styled from "styled-components";

const CanvasMain = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  const draw = (ctx: CanvasRenderingContext2D) => {
    ctx.beginPath();
    ctx.moveTo(20, 1000);
    ctx.lineTo(20, 20);
    ctx.lineTo(200, 20);
    ctx.lineTo(200, 80);
    ctx.strokeStyle = "white";
    ctx.stroke();
  };

  useEffect(() => {
    const canvas = ref.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        draw(context);
      }
    }
  }, [draw]);

  return <Canvas ref={ref} />;
};
export default CanvasMain;

const Canvas = styled.canvas`
  position: absolute;
  top: 1rem;
  left: 45.7rem;
  width: 240px;
  height: 340px;

  /* Responsive styles */
  @media (max-width: 768px) {
    left: 25rem; /* Adjust the position */
    width: 180px; /* Adjust canvas width */
    height: 250px; /* Adjust canvas height */
  }

  @media (max-width: 480px) {
    left: 15rem; /* Further adjust the position */
    width: 150px; /* Adjust canvas width */
    height: 210px; /* Adjust canvas height */
  }
`;
