import { Container, Link, Content } from './styles'

function Menu() {
    const menuItems = [
        {
            name: "Home",
            linkTo: "/",
        },
        {
            name: "Pesquisar",
            linkTo: "/pesquisar",
        },
        {
            name: "Contato",
            linkTo: "/contato",
        },
    ]
    return (
        <Container>
            <Content>
            {menuItems.map(item => (
                <Link
                    exact
                    activeClassName="menu-active"
                    key={item.name}
                    to={item.linkTo}
                >
                    {item.name}
                </Link>
            ))}
            </Content>
        </Container>
    )
}

export {Menu}