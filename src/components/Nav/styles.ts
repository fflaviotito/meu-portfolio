import styled, { css } from 'styled-components'

interface NavContainerProps {
    $variant: 'header' | 'social'
}

export const NavContainer = styled.nav<NavContainerProps>`
    ul {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing.md};
    }

    li {
        display: flex;
    }

    @media (min-width: 400px) {
        ul {
            flex-direction: row;
        }
    }

    a {
        text-align: center;
        
        ${({ $variant }) => $variant === 'social' && css`
            padding: 0 1rem;
            border-radius: 8px;
            font-weight: bold;
            font-size: ${({ theme }) => theme.fontSizes.large};
            color: ${({ theme }) => theme.colors.textLight};
            transition: color 0.3s ease;

            &:hover {
                color: ${({ theme }) => theme.colors.text};
            }

            svg {
                font-size: 30px;
            }
        `}
    }

`