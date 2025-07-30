import type { ILinkNav } from '../../types/ILinkNav'

import { NavContainer } from './styles'

interface NavProps {
    ariaLabel: string
    listLinks: ILinkNav[]
    variant: 'header' | 'social'
}

const Nav = ({ ariaLabel, listLinks, variant }: NavProps) => {
    return (
        <NavContainer aria-label={ariaLabel} $variant={variant}>
            <ul>
                {listLinks.map(link => {
                    return <li key={link.id}>
                        <a
                            href={link.href}
                            target={link.target}
                            rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                        >
                            <span>{link.icon}</span>
                            <span>{link.label}</span>
                        </a>
                    </li>
                })}
            </ul>
        </NavContainer>
    )
}

export default Nav