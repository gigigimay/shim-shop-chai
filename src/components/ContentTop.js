import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import { COLOR, BREAKPOINT } from '../constants'

const Title = styled.div`
  font-family: 'Kanit', sans-serif;
  font-size: 16px;
  text-align: center;
`

const Body = styled.div`
  color: ${COLOR.red};
  font-family: 'Kanit', sans-serif;
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  
  @media (min-width: ${BREAKPOINT.sm}px) {
    font-size: 48px;
  }
`

const RegisterButton = styled.div`
  background-color: ${COLOR.blue};
  border-radius: 5px;
  padding: 10px;
  font-family: 'Kanit', sans-serif;
  font-size: 24px;
  max-width: 800px;
  margin: auto;
  color: white;
  text-align: center;
  box-shadow: 0 15px 30px 0 rgba(28, 78, 132, 0.4);
  cursor: pointer;
  transition: background-color 0.1s ease-out;
  
  :hover {
    background-color: ${COLOR.yellow};
  }

  @media (max-width: ${BREAKPOINT.sm - 1}px) {
    font-size: 18px;
  }
`

const RegisterCol = styled(Col)`
  margin: 10px 0;
  z-index: 1 !important;
`

const HrCol = styled(Col)`
  margin-top: -50px;
  margin-bottom: 30px;
  @media (max-width: ${BREAKPOINT.sm - 1}px) {
    display: none;
  }
`

export default ({ duration }) => (
  <Container fluid>
    <Row style={{ marginTop: 30 }}>
      <Col>
        <Title>ตั้งแต่วันที่</Title>
        <Body>{duration}</Body>
      </Col>
    </Row>
    <Row>
      <RegisterCol xs="12">
        <RegisterButton>
          ลงทะเบียน เฟส 2
          <br />
          ตั้งแต่วันที่ 24 ต.ค.62 วันละ 2 รอบ เวลา 6.00 และ 18.00 น.
          <br />
          (จำกัดจำนวนผู้ลงทะเบียนรอบละ 5 แสนคน รวม 1 ล้านคนต่อวัน)
        </RegisterButton>
      </RegisterCol>
      <HrCol><hr /></HrCol>
    </Row>
  </Container>
)
