import styled from 'styled-components'
import Starjedi from '../../assets/fonts/Starjedi.woff'

export const Container = styled.div`
@font-face {
    font-family: 'Strj';
    src: local('Strj'),
    url(${Starjedi}) format('woff');
    font-weight: normal;
    font-style: normal;
}

padding: 20px;
background-color: black;
font-family: 'Strj';
display: flex;
align-items: center;
justify-content: space-between;
margin: auto;
`
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
`
export const Image = styled.img`
  width: 50%;
  border: 2px solid black;
  border-radius: 25px;
`

export const TextName = styled.h3`
  text-align: center;
  width: 80%;
  border: 2px solid black;
  border-radius: 25px;
`