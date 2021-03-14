import { Switch, Route, Redirect } from 'react-router-dom'

import { Home, Pesquisar, Contato } from '../pages'

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/pesquisar" component={Pesquisar} />
      <Route exact path="/contato" component={Contato} />
      <Redirect from="*" to="/" />
    </Switch>
  )
}

export { Routes }