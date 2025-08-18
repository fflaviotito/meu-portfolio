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
        description: 'Primeiro tema aprendido, serviu como base para todo conhecimento adquirido. Apesar de não estar na aba de projetos, há páginas feitas durante o aprendizado no GitHub.'
    },
    {
        id: 'css',
        label: 'CSS',
        icon: '/images/css.png',
        description: 'Primeiro tema aprendido, serviu como base para todo conhecimento adquirido. Apesar de não estar na aba de projetos, há páginas feitas durante o aprendizado no GitHub.'
    },
    {
        id: 'javascript',
        label: 'JavaScript',
        icon: '/images/javascript.png',
        description: 'Primeiro tema aprendido, serviu como base para todo conhecimento adquirido. Apesar de não estar na aba de projetos, há páginas feitas durante o aprendizado no GitHub.'
    },
    {
        id: 'react',
        label: 'React',
        icon: '/images/react.png',
        description: 'Primeiro tema aprendido, serviu como base para todo conhecimento adquirido. Apesar de não estar na aba de projetos, há páginas feitas durante o aprendizado no GitHub.'
    },
    {
        id: 'typescript',
        label: 'TypeScript',
        icon: '/images/typescript.png',
        description: 'Primeiro tema aprendido, serviu como base para todo conhecimento adquirido. Apesar de não estar na aba de projetos, há páginas feitas durante o aprendizado no GitHub.'
    },
    {
        id: 'node',
        label: 'Node.js',
        icon: '/images/node.png',
        description: 'Primeiro tema aprendido, serviu como base para todo conhecimento adquirido. Apesar de não estar na aba de projetos, há páginas feitas durante o aprendizado no GitHub.'
    },
    {
        id: 'mysql',
        label: 'MySQL',
        icon: '/images/mysql.png',
        description: 'Primeiro tema aprendido, serviu como base para todo conhecimento adquirido. Apesar de não estar na aba de projetos, há páginas feitas durante o aprendizado no GitHub.'
    },
    {
        id: 'git',
        label: 'Git',
        icon: '/images/git.png',
        description: 'Primeiro tema aprendido, serviu como base para todo conhecimento adquirido. Apesar de não estar na aba de projetos, há páginas feitas durante o aprendizado no GitHub.'
    },
    {
        id: 'github',
        label: 'GitHub',
        icon: '/images/github.png',
        description: 'Primeiro tema aprendido, serviu como base para todo conhecimento adquirido. Apesar de não estar na aba de projetos, há páginas feitas durante o aprendizado no GitHub.'
    },
    {
        id: 'softskills',
        label: 'Soft Skills',
        icon: '/images/soft-skills.png',
        description: 'Primeiro tema aprendido, serviu como base para todo conhecimento adquirido. Apesar de não estar na aba de projetos, há páginas feitas durante o aprendizado no GitHub.'
    },
]

export default skillsData