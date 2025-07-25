import type { IPageSections } from '../../types/IPageSections'
import { Container } from '../../styles/Container'

interface HomePageProps {
    pageSections: IPageSections[]
}

const HomePage = ({ pageSections }: HomePageProps) => {
    return (
        <Container $variant='main'>
            {pageSections.map(section => 
                <section id={section.id} key={section.id}>{section.component}</section>)
            }
        </Container>
    )
}

export default HomePage