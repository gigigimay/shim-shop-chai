import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import { COLOR, BREAKPOINT, IMAGE } from '../constants'

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
  z-index: 1;

  @media (max-width: ${BREAKPOINT.sm - 1}px) {
    padding-top: 8px;
    padding-bottom: 8px;
    height: 64px;
  }
`

const Item = styled(Col)`
  padding: 16px;
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
`

const MobileCol = styled(Col)`
  @media (min-width: ${BREAKPOINT.sm}px) {
    display: none !important;
  }
`

const Logo = styled(MobileCol)`
  height: 100%;
  img{
    height: 100%;
    object-fit: contain;
    cursor: pointer;
  }
`

const Hamburger = styled(MobileCol)`
  display: flex;
  align-items: center;
  padding-right: 32px !important;
  > div {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    width: 30px;
    height: 20px;
    justify-content: space-between;
  }
`

const Ham = styled.div`
  height: 3px;
  width: 100%;
  background-color: ${COLOR.body};
`

class Navbar extends React.Component {
  state = {
    isSidebarOpen: false,
  }

  renderItems = () => {
    const { items } = this.props
    return items && items.map((item, index) => (
      <Item sm="auto" key={`navbarItem${index}`} className="hidden-xs">
        <a href={item.href} target="_blank" rel="noopener noreferrer">
          {item.label}
        </a>
      </Item>
    ))
  }

  render() {
    return (
      <Wrapper>
        <NavbarContainer fluid>
          <NavbarRow>
            {this.renderItems()}
            <Logo>
              <img src={IMAGE.logo.footer} alt="logo" />
            </Logo>
            <Hamburger xs="auto">
              <div>
                <Ham />
                <Ham />
                <Ham />
              </div>
            </Hamburger>
          </NavbarRow>
        </NavbarContainer>
      </Wrapper>
    )
  }
}

export default Navbar
