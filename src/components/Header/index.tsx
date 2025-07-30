import type { ILinkNav } from '../../types/ILinkNav'
import { Container } from '../../styles/Container'
import Nav from '../Nav'
import { HeaderContent } from './styles'

interface HeaderProps {
    listLinks: ILinkNav[]
}

const Header = ({ listLinks }: HeaderProps) => {
    return (
        <Container $variant='header'>
            <HeaderContent>
                <h1>Logo do Portifólio</h1>
                <Nav
                    ariaLabel='Menu de navegação'
                    listLinks={listLinks}
                    variant='header'
                />
            </HeaderContent>
        </Container>
    )
}

export default Header