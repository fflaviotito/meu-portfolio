import type { IPageSections } from '../../types/iPageSections'
import { HeaderContainer, HeaderContent } from './styles'

interface HeaderProps {
    menuOptions: IPageSections[]
}

const Header = ({ menuOptions }: HeaderProps) => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <h1>Logo do Portifólio</h1>
                <nav>
                    <ul>
                        {menuOptions.map(option => <li key={option.id}><a href={`#${option.id}`}>{option.label}</a></li>)}
                    </ul>
                </nav>
            </HeaderContent>
        </HeaderContainer>
    )
}

export default Header