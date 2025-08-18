export interface ISkill {
    id: string
    label: string
    icon: `/images/${string}.png`
    description: string
}

const skillsData: ISkill[] = [
    {
        id: 'html',
        label: 'HTML',
        icon: '/images/html.png',
        description: 'Primeira linguagem que aprendi. Com ela desenvolvi páginas simples, como uma cópia da tela de login do Facebook, sempre aplicando conceitos de mobile first. Foi o ponto de partida para toda a minha base em desenvolvimento web.'
    },
    {
        id: 'css',
        label: 'CSS',
        icon: '/images/css.png',
        description: 'Aprendi a organizar estilos de forma limpa e semântica. Tenho experiência com Flexbox e Grid, além de trabalhar com responsividade desde o início. Me preocupo bastante com a aparência e a usabilidade das interfaces.'
    },
    {
        id: 'javascript',
        label: 'JavaScript',
        icon: '/images/javascript.png',
        description: 'Tenho domínio dos conceitos fundamentais como variáveis, funções, manipulação de DOM, arrays e objetos. Desenvolvi projetos práticos como to-do list e jogo da velha, disponíveis no GitHub.'
    },
    {
        id: 'react',
        label: 'React',
        icon: '/images/react.png',
        description: 'É a tecnologia em que mais estou focado atualmente. Tenho boa experiência com useState, useEffect, React Router, Styled Components e Context API. Estou constantemente aprimorando meu conhecimento e aplicando-o em projetos reais.'
    },
    {
        id: 'typescript',
        label: 'TypeScript',
        icon: '/images/typescript.png',
        description: 'Comecei a utilizar recentemente, motivado pela demanda do mercado. Estou gostando bastante da clareza que ele traz ao código e já utilizo em projetos reais como este portfólio.'
    },
    {
        id: 'node',
        label: 'Node.js',
        icon: '/images/node.png',
        description: 'Está sendo meu foco de estudo para backend. Já explorei ferramentas como Express e conceitos de rotas, middlewares e tratamento de erros. Ainda em aprendizado, mas com evolução contínua.'
    },
    {
        id: 'mysql',
        label: 'MySQL',
        icon: '/images/mysql.png',
        description: 'Conhecimento básico de SQL, com prática em criação de tabelas, relacionamentos e consultas simples. Tenho planos de integrar com o backend em projetos futuros.'
    },
    {
        id: 'git',
        label: 'Git',
        icon: '/images/git.png',
        description: 'Uso o GitHub Desktop para versionamento, mas estou evoluindo para trabalhar com Git via terminal. Entendo bem o fluxo de commits, branches e merges.'
    },
    {
        id: 'github',
        label: 'GitHub',
        icon: '/images/github.png',
        description: 'Utilizo o GitHub para hospedar e documentar meus projetos. Procuro manter os repositórios organizados, com README e histórico de desenvolvimento acessível.'
    },
    {
        id: 'softskills',
        label: 'Soft Skills',
        icon: '/images/soft-skills.png',
        description: 'Embora ainda não tenha atuado com desenvolvimento, desenvolvi habilidades interpessoais em outras experiências profissionais. Trabalho em equipe, organização e responsabilidade são diferenciais que trago comigo.'
    },
]

export default skillsData