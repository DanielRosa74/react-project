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

background-color: black;
font-family: 'Strj';
height: 10vh;
`

export const Content = styled.div`
  padding: 0 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled.h1`
  color: #fff;
  margin-left: 10px;
`