import styled, { css } from 'styled-components';
import get from 'lodash/get';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import { TextStyleVariantsMap } from '../../foundation/Text/index';
import propToStyle from '../../../theme/utils/propToStyle';

const ButtonGhost = css`
    color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
    background: transparent;
`;

const ButtonDefault = css`
    background-color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
    color: ${(props) => get(props.theme, `colors.${props.variant}.contrastText`)};
`;

const Button = styled.button`
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
            ${TextStyleVariantsMap.smallestException}
        `,
    md: css`
            /* From md breakpoint */
            ${TextStyleVariantsMap.paragraph1}
        `,
  })}

    ${propToStyle('margin')}
    ${propToStyle('display')}
`;

export default Button;
