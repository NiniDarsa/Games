import styled from "styled-components"

const Letters=({wrong}:{wrong:string[]})=>{
    
    return(
        <StyledContainer>
        <h1>Wrong Letters</h1>
        <StyledLetters>
        {wrong}
        </StyledLetters>
        </StyledContainer>
    )
}
export default Letters

const StyledContainer=styled.div`
    position: absolute;
`
const StyledLetters=styled.div`
    width: 10rem;
    height: 2rem;
    border: 1px solid red;
    letter-spacing: 1rem;
`