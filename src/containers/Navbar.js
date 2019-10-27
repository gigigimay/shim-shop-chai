import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import { COLOR, BREAKPOINT, IMAGE } from '../constants'

// TODO: add sidebar open/close in mobile

const Wrapper = styled.div`
  margin-bottom: 53px;
  @media (max-width: ${BREAKPOINT.sm - 1}px) {
    margin-bottom: 64px;
  }
`

const NavbarContainer = styled(Container)`
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
  z-index: 10;

  @media (max-width: ${BREAKPOINT.sm - 1}px) {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`

const Item = styled(Col)`
  padding: 16px;
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
  font-weight: 300;
  a {
    text-decoration: none;
    color: ${COLOR.body};
  }
  a:hover {
    color: ${COLOR.blue};
    text-decoration: none;
  }

  @media (max-width: ${BREAKPOINT.sm - 1}px) {
    display: none !important;
  }
`

const NavbarRow = styled(Row)`
  justify-content: center;
  height: 100%;
  @media (max-width: ${BREAKPOINT.sm - 1}px) {
    height: 48px;
  }
`

const MobileCol = styled(Col)`
  @media (min-width: ${BREAKPOINT.sm}px) {
    display: none !important;
  }
`

const Logo = styled(MobileCol)`
  height: 100%;
  img {
    height: 100%;
    cursor: pointer;
  }
`

const HamburgerCol = styled(MobileCol)`
  display: flex;
  align-items: center;
  padding-right: 32px !important;
`

const Hamburger = styled.div`
  cursor: pointer;
  position: relative;
  width: 30px;
  height: 20px;

  > div {
    height: 3px;
    border-radius: 9px;
    width: 100%;
    background-color: ${COLOR.body};
    position: absolute;
    transition-duration: .25s;
    transition-timing-function: ease-in-out;
    transition-property: transform;
  }

  > div:nth-child(1) {
    top: 0;
    transition-property: transform, top;
  }
  > div:nth-child(2) {
    transition-property: transform, opacity;
    top: 10px;
  }
  > div:nth-child(3) {
    top: 20px;
    transition-property: transform, top;
  }

  &.active {
    > div:nth-child(1) {
      transform: rotateZ(-135deg);
      top: 11px;
    }
    > div:nth-child(2) {
      transform: translateX(-50px);
      opacity: 0;
    }
    > div:nth-child(3) {
      transform: rotateZ(135deg);
      top: 11px;
    }
  }
`

const HamburgerRow = styled(Row)`
  overflow: hidden;
  height: 0;
  transition: height .25s ease-in-out;
  &.active {
    height: 150px;
  }
  @media (min-width: ${BREAKPOINT.sm}px) {
    display: none !important;
  }
`

const MenuItem = styled(MobileCol)`
  text-align: right;
  height: 50px;
  line-height: 50px;

  a {
    text-decoration: none;
    color: #666;
  }
  a:hover {
    color: ${COLOR.body};
    text-decoration: none;
  }
`

class Navbar extends React.Component {
  state = {
    active: false,
  }

  onClick = () => this.setState(prevState => ({ active: !prevState.active }))

  renderItems = () => {
    const { items } = this.props
    return items && items.map(item => (
      <Item sm="auto" key={item.key} className="hidden-xs">
        <a href={item.href} target="_blank" rel="noopener noreferrer">
          {item.label}
        </a>
      </Item>
    ))
  }

  renderMenu = () => {
    const { items } = this.props
    return items && items.map(item => (
      <MenuItem xs="12" key={item.key}>
        <a href={item.href} target="_blank" rel="noopener noreferrer">
          {item.label}
        </a>
      </MenuItem>
    ))
  }

  render() {
    const { active } = this.state
    return (
      <Wrapper>
        <NavbarContainer fluid className={active && 'active'}>
          <NavbarRow>
            {this.renderItems()}
            <Logo>
              <a href="#top"><img src={IMAGE.logo.footer} alt="logo" /></a>
            </Logo>
            <HamburgerCol xs="auto">
              <Hamburger onClick={this.onClick} className={active && 'active'}>
                <div />
                <div />
                <div />
              </Hamburger>
            </HamburgerCol>
          </NavbarRow>
          <HamburgerRow className={active && 'active'}>
            {this.renderMenu()}
          </HamburgerRow>
        </NavbarContainer>
      </Wrapper>
    )
  }
}

export default Navbar
