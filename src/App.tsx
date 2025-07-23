import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes'
import Header from './components/Header'

const pageSections = [
  {id: 'sobre-mim', label: 'Sobre Mim'},
  {id: 'habilidades', label: 'Habilidades'},
  {id: 'projetos', label: 'Projetos'},
  {id: 'contatos', label: 'Contatos'}
]

function App() {
  return (
    <BrowserRouter>
      <Header menuOptions={pageSections}/>
      <AppRoutes pageSections={pageSections} />
    </BrowserRouter>
  )
}

export default App
