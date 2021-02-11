import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import styled, { css } from 'styled-components';

const ButtonGhost = css`
    color: #FB7B6B;
    background: transparent;
`
const ButtonDefault = css`
    //color: #fff;
    background-color: ${function(props){
        return props.theme.colors.primary.main.color
    }};
    color: ${function(props){
        return props.theme.colors.primary.main.contrastText
    }};
`

export const Button = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    border-radius: 8px;
    ${function(props) {
        if(props.ghost) {
            return ButtonGhost;
        }
        return ButtonDefault;
    }}
    &:hover,
    &:focus {
    opacity: .5;
    }
`;