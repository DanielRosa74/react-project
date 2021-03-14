import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Starjedi from '../../assets/fonts/Starjedi.woff'


export const Container = styled.nav`
    @font-face {
        font-family: 'Strj';
        src: local('Strj'),
        url(${Starjedi}) format('woff');
        font-weight: normal;
        font-style: normal;
    }

    background-color: black;
    font-family: 'Strj';
    display:flex;
    z-index: 1;
`

export const Link = styled(NavLink)`
  display: flex;
  text-decoration: none;
  color: #fff;
  margin: 0 15px;
  font-size: 1.1em;
  font-weight: bold;
  
  &:active {
    color: #fff;
  }

  &:hover {
    color: #E6C330;
    cursor: pointer;
  }
`

export const Content = styled.div`
    display: flex;
    width 100%;
    align-items: center;
    justify-content: flex-end;
`