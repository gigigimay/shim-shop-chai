import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import { IMAGE, BREAKPOINT } from '../constants'

const BannerImage = styled(Col).attrs({
  xs: '4',
})`
  height: 300px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${BREAKPOINT.sm - 1}px) {
    height: 250px;
  }
`

const Logo = styled.div`
  height: 200px;

  img { height: 100%; }

  @media (max-width: ${BREAKPOINT.sm - 1}px) {
    height: 130px;
  }
`

export default () => (
  <Container fluid>
    <Row>
      <BannerImage image={IMAGE.banner.top.left} />
      <BannerImage image={IMAGE.banner.top.center}>
        <Logo>
          <img src={IMAGE.logo.banner} alt="banner logo" />
        </Logo>
      </BannerImage>
      <BannerImage image={IMAGE.banner.top.right} />
    </Row>
  </Container>
)
