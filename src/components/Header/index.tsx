import { Container } from '../../styles/Container'
import type { IPageSections } from '../../types/IPageSections'
import { HeaderContent } from './styles'

interface HeaderProps {
    menuOptions: IPageSections[]
}

const Header = ({ menuOptions }: HeaderProps) => {
    return (
        <Container $variant='header'>
            <HeaderContent>
                <h1>Logo do Portifólio</h1>
                <nav>
                    <ul>
                        {menuOptions.map(option => 
                            <li key={option.id}>
                                <a href={`#${option.id}`}>{option.label}</a>
                            </li>
                        )}
                    </ul>
                </nav>
            </HeaderContent>
        </Container>
    )
}

export default Header