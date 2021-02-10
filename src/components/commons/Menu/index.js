import React from 'react';
import { MenuWrapper } from './styles/MenuWrapper';
import { Button } from '../Button/styles'
import { Logo } from '../../../theme/Logo';

const links = [
    {
        texto: 'Home',
        url: '/'
    },
    {
        texto: 'Perguntas frequentes',
        url: '/faq'
    },
    {
        texto: 'Sobre',
        url: '/sobre'
    }
]

export default function Menu() {
    return (
        <MenuWrapper>
            <MenuWrapper.LeftSide>
                <Logo />
            </MenuWrapper.LeftSide>
            <MenuWrapper.MiddleSide>
                {links.map(function (link) {
                    return (
                        <li>
                            <a href={link.url}>
                                {link.texto}
                            </a>
                        </li>
                    )
                })}
            </MenuWrapper.MiddleSide>
            <MenuWrapper.RightSide>
                <Button ghost>
                    Entrar
                </Button>
                <Button>
                    Cadastrar
                </Button>
            </MenuWrapper.RightSide>
        </MenuWrapper>
    )
}