import type { ILinkNav } from '../../types/ILinkNav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { DownloadCV, ProfileActions, ProfileContainer, ProfileContent, ProfileImage, ProfileText } from './styles'
import { TitleSection } from '../../styles/TitleSection'

import Nav from '../Nav'

const socialNetworks: ILinkNav[] = [
    {
        id: 'github',
        href: 'http://github.com/fflaviotito/',
        target: '_blank',
        label: 'GitHub', 
        icon: <FontAwesomeIcon icon={faGithub} />
    },
    {
        id: 'linkedin',
        href: 'http://linkedin.com/in/franciscoflavio/',
        target: '_blank',
        label: 'Linkedin',
        icon: <FontAwesomeIcon icon={faLinkedin} />
    }
]

const AboutMe = () => {
    return (
        <>
            <TitleSection>Sobre Mim</TitleSection>
            <ProfileContainer>
                <ProfileImage
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmJACYPoJUcPJN9-3bshw0O2boYVLQJGuKAg&s'
                    alt='Foto perfil'
                />
                <ProfileContent>
                    <ProfileText>
                        Sou estudante de Engenharia de Software, movido pela curiosidade e paixão por tecnologia. Minha trajetória começou com o Excel, onde explorei fórmulas e macros e desenvolvi um sistema de bolão de palpites que me despertou o interesse em criar soluções para web. Atualmente, busco minha primeira oportunidade na área de TI, com foco em desenvolvimento web e constante aprendizado.
                    </ProfileText>
                    <ProfileActions>
                        <DownloadCV
                            href='/curriculos/FranciscoFlavio-CV.pdf'
                            download='CV - Francisco Flavio.pdf'
                            type='application/pdf'
                            aria-label='Baixar meu currículo em PDF'>
                                Baixar CV
                        </DownloadCV>
                        <Nav
                            ariaLabel='Minhas redes sociais'
                            listLinks={socialNetworks}
                            variant='social'
                        />
                    </ProfileActions>
                </ProfileContent>
            </ProfileContainer>
        </>
    )
}

export default AboutMe