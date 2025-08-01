import type { ILinkNav } from './types/ILinkNav'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import AppRoutes from './routes'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'

const pageSections: ILinkNav[] = [
  {
    id: 'sobre-mim', 
    href: '#sobre-mim',
    target: '_self',
    label: 'Sobre Mim',
    component: <AboutMe />
  },
  {
    id: 'habilidades', 
    href: '#habilidades',
    target: '_self',
    label: 'Habilidades',
    component: <Skills />
  },
  {
    id: 'projetos', 
    href: '#projetos',
    target: '_self',
    label: 'Projetos'
  },
  {
    id: 'contatos', 
    href: '#contatos',
    target: '_self',
    label: 'Contatos'
  },
]

function App() {
  return (
    <BrowserRouter>
      <Header listLinks={pageSections}/>
      <AppRoutes pageSections={pageSections} />
    </BrowserRouter>
  )
}

export default App
