import styled from 'styled-components'

import * as Colors from '../../assets/styles/colors'
import * as Widths from '../../assets/styles/widths'

export const Toc = styled.nav`
  position: relative;

  @media(max-width: ${Widths.MOBILE_WIDTH}) {
    display: none;
  }
`

export const Container = styled.div`
  position: ${props => props.fixedPosition && 'fixed'};
  top: ${props => props.fixedPosition && '14px'};
  width: ${props => props.fixedPosition && '20%'};
`

export const InnerScroll = styled.nav`
  display: block;
  overflow: auto;
  max-height: 500px;
`

export const Title = styled.h1`
  font-size: 1.2em;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: 20px;
  margin-top: 0;
`

const margins = {
  1: '0',
  2: '10px',
  3: '20px',
  4: '30px',
  5: '40px',
}

export const Link = styled.a`
  color: ${props => (props.active ? Colors.PRIMARY : Colors.TITLE)};
  text-decoration: none;
  display: block;
  line-height: 2em;
  font-size: 0.95em;
  transition: color 0.1s ease;
  margin-left: ${props => margins[props.depth]};

  &:hover {
    color: ${Colors.TITLE_HOVER};
  }
`
