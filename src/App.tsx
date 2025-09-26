import type { ILinkNav } from './types/ILinkNav'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Skills from './components/Skills'

import { Container, Content } from './styles/Container'

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
    <>
      <Header listLinks={pageSections}/>
      <Container $variant='main'>
          {pageSections.map(section => 
              <Content id={section.id} key={section.id}>{section.component}</Content>)
          }
      </Container>
    </>
  )
}

export default App
