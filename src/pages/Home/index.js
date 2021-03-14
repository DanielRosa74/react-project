import { Container, Content, Logo, Title } from './styles'
import GlobalStyles from '../../styles/global'

function Home() {
    return (
        <Container>
            <GlobalStyles />
            <Content>
                <Logo>
                    <img src="https://i.pinimg.com/originals/2f/48/54/2f4854e80863db8219a256c7a35bd034.png" alt="Star Wars logo" width="50%" height="80%" />
                    <Title>Codex</Title>
                    <h1>Clique em Pesquisar no menu para começar</h1>
                </Logo>
            </Content>
        </Container>    
    )
}

export {Home}