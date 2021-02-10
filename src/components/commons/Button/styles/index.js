import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import styled, { css } from 'styled-components';

export const Button = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    border-radius: 8px;
    color: #fff;
    background-color: #D7385E;
    ${function(props) {
        if(props.ghost) {
            return css`
                background:transparent;
            `
        }
    }

    }
    &:hover,
    &:focus {
    opacity: .5;
    }
`;