import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import { COLOR, BREAKPOINT, IMAGE } from '../constants'

const Title = styled.div`
  color: ${COLOR.red};
  font-family: 'Kanit', sans-serif;
  font-size: 24px;
  @media (min-width: ${BREAKPOINT.md}px) {
    font-size: 36px;
  }
`

const Text = styled.div`
  font-size: 14px;
  @media (min-width: ${BREAKPOINT.md}px) {
    font-size: 18px;
  }
`

const Condition = styled.div`
  font-family: 'Kanit', sans-serif;
  font-size: 16px;
  font-weight: bold;
  @media (min-width: ${BREAKPOINT.md}px) {
    font-size: 18px;
  }
`

const ImageBox = styled(Col)`
  text-align: center;
  img {
    width: 100%;
  }
`

export default ({ detail, condition }) => (
  <>
    <Container style={{ marginTop: 70 }}>
      <Row>
        <Col xs="12" sm="10">
          <Title>
            มาตรการส่งเสริมการบริโภค
            <br />
            ในประเทศ
            {' '}
            <span className="nowrap">“ชิมช้อปใช้”</span>
          </Title>
        </Col>
        <Col xs="12" sm="10" className="mt-4">
          <Text dangerouslySetInnerHTML={{ __html: detail }} />
        </Col>
        <Col xs="12" sm="10" className="mt-4">
          <Condition>เงื่อนไขการเข้าร่วมมาตรการ</Condition>
          <Text className="mt-2" dangerouslySetInnerHTML={{ __html: condition }} />
        </Col>
      </Row>
      <Row style={{ margin: '100px 0' }}>
        {Object.keys(IMAGE.box).map((key) => (
          <ImageBox sm="4" key={key}>
            <img src={IMAGE.box[key]} alt={key} style={{ maxWidth: 350 }} />
          </ImageBox>
        ))}
      </Row>
      <Row style={{ margin: '75px 0' }}>
        {Object.keys(IMAGE.brandLogo).map((key) => (
          <ImageBox xs="4" sm="2" key={key}>
            <img src={IMAGE.brandLogo[key]} alt={key} style={{ maxWidth: 100 }} />
          </ImageBox>
        ))}
      </Row>
    </Container>
  </>
)
