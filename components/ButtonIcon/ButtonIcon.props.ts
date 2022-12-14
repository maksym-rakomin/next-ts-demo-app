import {ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import up from './ArrowUp.svg'
import close from './close.svg'
import menu from './menu.svg'

export const icons = {
    up,
    close,
    menu,
}

export type iconName = keyof typeof icons

export interface ButtonPops extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    appearance: 'primary' | 'white',
    icon: iconName,
}
