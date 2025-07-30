import styled from 'styled-components'

export const ProfileContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};

    @media (min-width: 800px) {
        flex-direction: row;
        align-items: stretch;
    }
`

export const ProfileImage = styled.img`
    width: 100%;
    max-width: 400px;

    @media (min-width: 800px) {
        width: 400px;
        height: 400px;
    }
`

export const ProfileContent = styled.div`
    display: flex;
    flex-direction: column;
` 

export const ProfileText = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.large};
    text-align: justify;
    margin-bottom: ${({ theme }) => theme.spacing.md};
`

export const ProfileActions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.md};

    @media (min-width: 400px) {
        flex-direction: row;
        justify-content: space-evenly;
    }

    @media (min-width: 800px) {
        flex-grow: 1;
    }
`

export const DownloadCV = styled.a`
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    padding: 0.75rem 1rem;
    border-radius: 8px;
    font-weight: bold;
    transition: background-color 0.3s;
    text-align: center;

    &:hover {
        background-color: ${({ theme }) => theme.colors.secondary};
    }
`