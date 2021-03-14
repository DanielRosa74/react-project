import styled from 'styled-components'
import Starjedi from '../../assets/fonts/Starjedi.woff'

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
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
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
`

export const CardList = styled.div`
    @font-face {
        font-family: 'Strj';
        src: local('Strj'), local('FontName'),
        url(${Starjedi}) format('woff');
        font-weight: normal;
        font-style: normal;
    }
    background-image: url("https://cutewallpaper.org/21/star-wars-starfield-background/Star-Wars-Backgrounds-Wallpaper-Cave.jpg"); 

    font-family: 'Strj';
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

`
export const Input = styled.input`
    @font-face {
        font-family: 'Strj';
        src: local('Strj'), local('FontName'),
        url(${Starjedi}) format('woff');
        font-weight: normal;
        font-style: normal;
    }


    font-family: 'Strj';
  outline: 0;
  background: transparent;
  border-width: 0 0 2px;
  border-color: #fff;
  color: #fff;
`
export const InputContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 15px;
`