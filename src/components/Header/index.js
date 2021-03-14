import { Menu } from '../Menu'

import { Container, Content, Logo, Title } from './styles'

function Header() {
  return (
    <Container>
      <Content>
        <Logo>
          <img src="https://i.pinimg.com/originals/2f/48/54/2f4854e80863db8219a256c7a35bd034.png" alt="Star Wars logo" width="150" height="80" />
          <Title>Codex</Title>
        </Logo>
        <Menu />
      </Content>
    </Container>
  )
}

export { Header }