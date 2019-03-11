import { css } from 'styled-components';

const sizes = {
  desktop: 992,
  tablet: 768,
  mobile: 700,
};

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export { media };
