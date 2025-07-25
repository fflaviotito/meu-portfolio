import styled from 'styled-components'

export const TitleSection = styled.h2`
    text-align: center;
    font-size: ${({ theme }) => theme.fontSizes.title};
    margin-bottom: ${({ theme }) => theme.spacing.md};
`