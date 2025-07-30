import styled, { css } from 'styled-components'

interface ContainerProps {
    $variant: 'header' | 'main' | 'footer'
}

export const Container = styled.div.attrs<ContainerProps>(({ $variant }) => ({ as: $variant}))`
    width: 100%;
    padding: ${({ theme }) => theme.spacing.md};

    @media (min-width: 400px) {
        padding: ${({ theme }) => theme.spacing.xl};
    }

    ${({ $variant, theme }) => $variant === 'header' && css`
        background-color: ${theme.layout.header};
    `}

    ${({ $variant, theme }) => $variant === 'main' && css`
        background-color: ${theme.layout.main};
    `}

    ${({ $variant, theme }) => $variant === 'footer' && css`
        background-color: ${theme.layout.footer};
    `}
`

export const Content = styled.section`
    max-width: 1000px;
    margin: auto;
`