import styled from 'styled-components'
import Starjedi from '../../assets/fonts/Starjedi.woff'

export const Content = styled.div`
    margin: 0;
`

export const Container = styled.div`
    @font-face {
        font-family: 'Strj';
        src: local('Strj'), local('FontName'),
        url(${Starjedi}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
    background-image: url("https://cutewallpaper.org/21/star-wars-starfield-background/Star-Wars-Backgrounds-Wallpaper-Cave.jpg"); 
    height: 90vh;
    font-family: 'Strj';
    display:flex;
    align-items: center;
`
export const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
`

export const Title = styled.h1`
  color: #fff;
  font-size: 10rem;
  margin: 0;
`