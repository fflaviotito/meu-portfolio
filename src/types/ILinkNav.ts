import type { JSX } from 'react'

export interface ILinkNav {
    id: string
    href: string
    target: '_self' | '_blank'
    label?: string
    icon?: JSX.Element
    component?: JSX.Element
}