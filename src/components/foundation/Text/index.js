import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

export const TextStyleVariantsMap = {
    paragraph1: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
    `,

    smallestException: css`
    font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
    `,
};

const TextBase = styled.span`
    ${(props) => TextStyleVariantsMap[props.variant]}
`;

export default function Text({tag, variant, children}) {
    return (
        <TextBase 
            as={tag}
            variant={variant}
        >
            {children}
        </TextBase>
    );
}

Text.defaultProps = {
    tag: 'span',
    variant: 'paragraph1',
}

Text.propTypes = {
	tag: PropTypes.string.isRequired,
	variant: PropTypes.string,
	children: PropTypes.node.isRequired,
};