import { TitleSection } from '../../styles/TitleSection'

type SocialLink = {
    href: string,
    label: string,
    icon: string
}

const socialNetworks: SocialLink[] = [
    {
        href: 'http://github.com/fflaviotito/',
        label: 'GitHub',
        icon: 'icon'
    },
    {
        href: 'http://linkedin.com/in/franciscoflavio/',
        label: 'Linkedin',
        icon: 'icon'
    }
]

const AboutMe = () => {
    return (
        <>
            <TitleSection>Sobre Mim</TitleSection>
            <div>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmJACYPoJUcPJN9-3bshw0O2boYVLQJGuKAg&s'
                    alt='Foto perfil'
                />
                <p>
                    Sou estudante de Engenharia de Software, movido pela curiosidade e paixão por tecnologia. Minha trajetória começou com o Excel, onde explorei fórmulas e macros e desenvolvi um sistema de bolão de palpites que me despertou o interesse em criar soluções para web. Atualmente, busco minha primeira oportunidade na área de TI, com foco em desenvolvimento web e constante aprendizado.
                </p>
            </div>
            <a
                href='/curriculos/FranciscoFlavio-CV.pdf'
                download='CV - Francisco Flávio.pdf'
                type='application/pdf'
                aria-label='Baixar meu currículo em PDF'>
                    Baixar CV
            </a>

            <nav aria-label='Minhas redes sociais'>
                <ul>
                    {socialNetworks.map(socialNetwork => {
                        return <li key={socialNetwork.label}>
                            <a href={socialNetwork.href} target='_blank' rel='noopener noreferrer'>
                                <p>{socialNetwork.icon}</p>
                                <p>{socialNetwork.label}</p>
                            </a>
                        </li>})
                    }
                </ul>
            </nav>
        </>
    )
}

export default AboutMe