import { Container, Content, CardList, Info } from './styles'
import { Card } from '../../components/Card'
import GlobalStyles from '../../styles/global'

function Contato() {
    return (
        <Container>
            <GlobalStyles />
            <Content>
                <h1>Contato</h1>
                <CardList>
                    <Card key="the_author" name="Daniel Rosa" photo="the_author"/>
                    <Info>
                        <h3>aspirante a desenvolvedor</h3>
                        <h3>fale comigo por e-mail</h3>
                        <h3>gmail: daniel.c.rosa</h3>
                    </Info>
                </CardList>
            </Content>
        </Container>    
    )
}

export {Contato}