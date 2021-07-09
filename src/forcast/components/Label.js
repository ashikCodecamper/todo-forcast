import styled from 'styled-components';
import device from '../../responsive/device-detect';

export const LabelBig = styled.h2`
  color: ${({ color }) => color || '#FFFFFF'};
  display: block;
  font-weight: ${({ weight }) => weight || '600'};
  font-size: ${({ fontSize }) => fontSize || '30px'};
  text-align: ${({ align }) => align || 'left'};
  padding: 5px 0;
  ${({ firstToUpperCase }) =>
    firstToUpperCase &&
    `
  &:first-letter {
    text-transform: uppercase;
  }
  `}
  @media ${device.tablet} {
    font-size: ${({ fontSize }) => fontSize || '37px'};
  }
  @media ${device.laptop} {
    font-size: ${({ fontSize }) => fontSize || '43px'};
  } 
  @media ${device.laptopL} {
    font-size: ${({ fontSize }) => fontSize || '52px'};
  } 
`;

export const  LabelMedium = styled.h3`
color: ${({ color }) => color || '#FFFFFF'};
display: block;
font-weight: ${({ weight }) => weight || '600'};
font-size: ${({ fontSize }) => fontSize || '20px'};
text-align: ${({ align }) => align || 'left'};
padding: 5px 0;
${({ firstToUpperCase }) =>
  firstToUpperCase &&
  `
&:first-letter {
  text-transform: uppercase;
}
`}
@media ${device.tablet} {
  font-size: ${({ fontSize }) => fontSize || '23px'};
}
@media ${device.laptop} {
  font-size: ${({ fontSize }) => fontSize || '26px'};
} 
@media ${device.laptopL} {
  font-size: ${({ fontSize }) => fontSize || '29px'};
}
`;

export const LabelSmall = styled.h4`
color: ${({ color }) => color || '#FFFFFF'};
display: block;
font-weight: ${({ weight }) => weight || '600'};
font-size: ${({ fontSize }) => fontSize || '15px'};
text-align: ${({ align }) => align || 'left'};
padding: 5px 0;
${({ firstToUpperCase }) =>
  firstToUpperCase &&
  `
&:first-letter {
  text-transform: uppercase;
}
`}
@media ${device.tablet} {
  font-size: ${({ fontSize }) => fontSize || '20px'};
}
@media ${device.laptop} {
  font-size: ${({ fontSize }) => fontSize || '23px'};
} 
@media ${device.laptopL} {
  font-size: ${({ fontSize }) => fontSize || '26px'};
}
`;
