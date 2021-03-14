import * as React from 'react'
import { Container, Content, CardList, Input, InputContent } from './styles'
import GlobalStyles from '../../styles/global'
import { Card, Spinner } from '../../components'
import { api, fetchSWPeople } from '../../services'

function Pesquisar() {
    const [characters, setCharacters] = React.useState()
    const [loading, setLoading] = React.useState(true)
    const [backupCharacterSet, setBackupCharacterSet] = React.useState()
    const [characterName, setCharacterName] = React.useState('')
    React.useEffect(() => {
        async function fetchData(){
          const swData = await fetchSWPeople()

          if (swData.success){
            const promises = []
            
            swData.data.results.forEach(element => { 
                promises.push(api.get(element.url))}
            )
            Promise.allSettled(promises).then(results => {
                const updatedCharacters = []

                results.forEach(result => {
                    if(result.status === 'fulfilled'){
                        const adjustedPhoto = result.value.data.name.replace(/ /g,"_");
                        const uniqueCharacter = {
                            name: result.value.data.name.toLowerCase(),
                            photo: adjustedPhoto,
                        }
                        updatedCharacters.push(uniqueCharacter)
                    }
                })
                setCharacters(updatedCharacters)
                setBackupCharacterSet(updatedCharacters)
                setLoading(false)
           })
          }
        }
        fetchData()
    }, [])

    React.useEffect(() => {
        if (backupCharacterSet) {
          const initialSet = [...backupCharacterSet]
          const filteredCharacters = initialSet.filter(character =>
            character.name.includes(characterName.toLowerCase()),
          )
          setCharacters(filteredCharacters)
        }
      }, [characterName, backupCharacterSet])

    if(loading) return (
        <Container>
            <GlobalStyles />
            <Content>
                <h1>Carregando ...</h1>
                <Spinner />
            </Content>
        </Container>    
    )

    console.log(characters)

    return (
        <Container>
            <GlobalStyles />
            <Content>
                <h1>Pesquisar</h1>
                <InputContent>
                    <Input
                    placeholder="obi-wan kenobi"
                    value={characterName}
                    onChange={evt => setCharacterName(evt.target.value)}
                    />
                </InputContent>
                <CardList>
                {characters.map(character => (<Card key={character.name} {...character}/>))} 
                </CardList>
            </Content>
        </Container>    
    )
}

export {Pesquisar}