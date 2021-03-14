import { Container, Image, TextName, CardContainer } from './styles'

function Card({name, photo}) {
  const image = require(`../../assets/photos/${photo}.png`).default;
  return (
    <Container>
        <CardContainer>
          <Image src={image} alt="Character"/>
          <TextName>{name.toLowerCase()}</TextName>
        </CardContainer>
        
    </Container>
  )
}

export { Card }