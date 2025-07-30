import type { ILinkNav } from '../../types/ILinkNav'

import { Container, Content } from '../../styles/Container'

interface HomePageProps {
    pageSections: ILinkNav[]
}

const HomePage = ({ pageSections }: HomePageProps) => {
    return (
        <Container $variant='main'>
            {pageSections.map(section => 
                <Content id={section.id} key={section.id}>{section.component}</Content>)
            }
        </Container>
    )
}

export default HomePage