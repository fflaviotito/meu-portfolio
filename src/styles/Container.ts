import styled, { css } from 'styled-components'

interface ContainerProps {
    $variant: 'header' | 'main' | 'footer'
}

export const Container = styled.div.attrs<ContainerProps>(({ $variant }) => ({ as: $variant}))`
    width: 100%;
    padding: ${({ theme }) => theme.spacing.xl};

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