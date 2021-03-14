import {BrowserRouter as Router} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import {Header, Layout, RoutesLayout} from './components'
import { Routes } from './routes'
function App() {
  const history = createBrowserHistory()
  return (
    <div className="App">
      <Router history={history}>
        <Layout>
          <Header />
          <RoutesLayout>
            <Routes />
          </RoutesLayout>
        </Layout>
    </Router>
    </div>
  );
}

export default App;
