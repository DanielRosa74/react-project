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
    display:flex;
    align-items: center;
    flex-direction: column;
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

export const Info = styled.div`
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
    flex-direction: column;
    align-items: center;
    margin: auto;
`