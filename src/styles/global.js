import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    body{
        margin: 0 0;
    }

    a {
        &.menu-active{
            color: #E6C330;
            border-bottom: 4px solid #E6C330;
        }
    }
`