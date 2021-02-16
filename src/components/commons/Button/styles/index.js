import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';
import TextStyleVariantsMap from '../../../foundation/Text/index'

const ButtonGhost = css`
    color: ${function(props){
        return get(props.theme, `colors.${props.variant}.color`)
    }};
    background: transparent;
`
const ButtonDefault = css`
    background-color: ${function(props){
        return get(props.theme, `colors.${props.variant}.color`)
    }};
    color: ${function(props){
        return get(props.theme, `colors.${props.variant}.contrastText`)
    }};
`

export const Button = styled.button`
    border: 0;
    cursor: pointer;
    padding: 12px 26px;
    font-weight: bold;
    opacity: 1;
    border-radius: 8px;

    ${TextStyleVariantsMap.smallestException}

    transition: opacity ${({ theme }) => theme.transition};
    border-radius: ${({ theme }) => theme.borderRadius};
    ${({ ghost }) => (ghost ? ButtonGhost : ButtonDefault)}
    &:hover,
    &:focus {
    opacity: .5;
    }

    ${breakpointsMedia({
        xs: css`
            /* All devices */
        `,
        md: css`
        /* From md breakpoint */
        `
    })}
`;