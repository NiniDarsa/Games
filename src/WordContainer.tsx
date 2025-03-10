import styled from "styled-components"

type Prop={
    currentWord:string
    value:string
    handleChange:(e:React.ChangeEvent<HTMLInputElement>)=>void
}

const WordContainer=({currentWord,value,handleChange}:Prop)=>{
    return(
        <StyledContainer>
            <p>type the following:</p>
            <p className="word"><b>{currentWord}</b></p>
            <input type="text" placeholder="type the word here..." value={value} onChange={handleChange}/>
        </StyledContainer>
    )
}
export default WordContainer

const StyledContainer=styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .word{
        font-size: 6rem;
    }

    input{
      padding: .8rem .5rem;
      width: 50%;
    }
`