import styled from 'styled-components'
import media from 'styled-media-query'

const Divider = styled.hr`
  position: relative;
  height: 0px;
  width: auto;
  opacity: 0.6;
  margin-bottom: 60px;
  border-width: 0;
  overflow: visible;

  &:after {
    content: '-----------------------------------------------------------';
    font-size: 12px;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
  }

  ${media.lessThan('medium')`
    &:after {
      content: '---------------------------------------';
    }
  `} ${media.lessThan('small')`
    &:after {
      content: '-------------------------';
    }
  `};
`
export default Divider
