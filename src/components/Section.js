
import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';// //fade is used for animation like text and buttons up and downs & it is used npm i react-reveal



function Section({ title, description, RightBtnText, leftBtnText, backgroundImg }) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>
            {title}
          </h1>
          <p>
            {description}
          </p>
        </ItemText></Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnText} </LeftButton>
            {RightBtnText && <RightButton>{RightBtnText}</RightButton>}


          </ButtonGroup>
        </Fade>
        <DownArrow src='/images/down-arrow.svg' />


      </Buttons>
    </Wrap>


  )
}

export default Section;

const Wrap = styled.div`
height:100vh;
width:100vw;

background-position: center;
background-repeat: no-repeat;
background-size: cover;

display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
cursor: pointer;
margin:8px;
background-image: ${props => `url("/images/${props.bgImage}")`}
`

const ItemText = styled.div`
padding: 15vh;
  text-align: center;
`
const ButtonGroup = styled.div`
display:flex;
margin-bottom:30px;
@media (max-width: 769px) {
    flex-direction: column;
  }
`
const Buttons = styled.div``




const DownArrow = styled.img`
height:30px;
overflow-x:hidden;
animation:animateDown infinite 1.5s;

`



const LeftButton = styled.div`
background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  `


const RightButton = styled(LeftButton)`
background-color: white;

  color: black;

  opacity: 0.65;

`