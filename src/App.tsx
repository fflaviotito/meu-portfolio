import type { IPageSections } from './types/IPageSections'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import AppRoutes from './routes'
import AboutMe from './components/AboutMe'

const pageSections: IPageSections[] = [
  {id: 'sobre-mim', label: 'Sobre Mim', component: <AboutMe />},
  {id: 'habilidades', label: 'Habilidades'},
  {id: 'projetos', label: 'Projetos'},
  {id: 'contatos', label: 'Contatos'},
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
