import styled from "styled-components"

const Box=({value,onClick,winner,index}:{index:boolean,winner:string|null|undefined,value:string|null, onClick:()=>void})=>{

    
    return(
        <>
    {
        index?<StyledButton disabled={winner!==""&&winner!==null&&winner!==undefined} onClick={onClick}>{value}</StyledButton>
          :<StyledButt disabled={winner!==""&&winner!==null&&winner!==undefined} onClick={onClick}>{value}</StyledButt>
    }      
        </>
    )
}
export default Box

const StyledButton=styled.button`
    height: 10rem;
    width: 10rem;
    background-color: #71f371;
    color: black;
`
const StyledButt=styled.button`
     height: 10rem;
     width: 10rem;

`