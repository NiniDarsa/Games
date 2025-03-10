import styled from "styled-components"

type Prop={
    open:boolean
    difficulty:string
    handleChange:(e:React.ChangeEvent<HTMLSelectElement>)=>void
}
const Option=({open,difficulty,handleChange}:Prop)=>{
   const dDisplay = {
    transform: open? 'translateY(0)': 'translateY(-100%)',
  };
    return(
        <StyledSelect style={dDisplay}>
         <p>Difficulty:</p>
         <select id="difficulty" name="difficulty" onChange={handleChange} value={difficulty}>
           <option value="easy">easy</option>
           <option value="medium">medium</option>
           <option value="hard">hard</option> 
         </select>
         </StyledSelect>
    
    )
}
export default Option

const StyledSelect=styled.div`
    width: 100%;
    height: 10%;
    padding: 2rem 0rem;
    z-index: 10;
    font-size: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1F2B38;
    color: white;
    transition:all 1s ease ;
    p{
        padding-right: 1rem;
    }
    select{
        cursor: pointer; 
        background-color: #A7C5E3;
        width: 15%;
        padding: 0.4rem;
        &:focus{
            outline: none;
        }
    }
  
   
`