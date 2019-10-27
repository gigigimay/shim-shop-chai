import React from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap'
import { COLOR, BREAKPOINT, IMAGE } from '../constants'

const TopWrapper = styled.div`
  background-color: ${COLOR.footer};
  padding: 30px 0;
  @media (max-width: ${BREAKPOINT.sm - 1}px) {
    padding: 15px 30px;
  }
`

const BottomWrapper = styled.div`
  background-color: ${COLOR.blue};
  @media (max-width: ${BREAKPOINT.sm - 1}px) {
    padding: 15px 30px;
  }
`

const FooterCol = styled(Col).attrs({
  xs: '12',
  sm: '3',
})`
  img { width: 110px; }
  @media (max-width: ${BREAKPOINT.sm - 1}px) {
    padding: 8px 32px !important;
    img { width: 150px; }
  }
`

const Item = styled(FooterCol)`
  color: white;
  padding: 8px 12px;
  font-family: 'Kanit', sans-serif;
  font-size: 14px;
  a {
    text-decoration: none;
    color: white;
  }
  a:hover {
    text-decoration: none;
    color: white;
  }
  @media (max-width: ${BREAKPOINT.sm - 1}px) {
    font-size: 12px;
  }
`

const InfoTitle = styled.div`
  color: ${COLOR.red};
  font-size: 16px;
  margin-top: 24px;
  font-weight: bold;
`

const InfoBody = styled.div`
  font-size: 14px;
`

const Info = ({ title, children }) => (
  <FooterCol>
    <InfoTitle>{title}</InfoTitle>
    <InfoBody>{children}</InfoBody>
  </FooterCol>
)

export default ({ items }) => (
  <>
    <TopWrapper>
      <Container>
        <Row>
          <FooterCol>
            <img src={IMAGE.logo.footer} alt="footer logo" />
          </FooterCol>
          <Info title="ข้อมูลลงทะเบียนประชาชน">
            <div>การรับสิทธิ การใช้งานแอปพลิเคชั่น “เป๋าตัง” และ “ถุงเงิน”</div>
            <div>ติดต่อ ชิมช้อปใช้ Call Center by Krungthai โทร. 0 2111 1144</div>
          </Info>
          <Info title="ข้อมูลลงทะเบียนผู้ประกอบการ">
            <div>เงื่อนไขและวิธีการเข้าร่วมมาตรการฯ</div>
            <div>ติดต่อ โทร. 0 2270 6400 กด 7</div>
          </Info>
          <Info title="ข้อมูลเที่ยวชิมช้อปใช้">
            <div>ติดต่อ ททท.</div>
            <div>โทร 1672</div>
          </Info>
        </Row>
      </Container>
    </TopWrapper>
    <BottomWrapper>
      <Container>
        <Row>
          <Item>Copyright © 2003-2019</Item>
          {items && items.map(item => (
            <Item sm="auto" key={item.key} className="hidden-xs">
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
            </Item>
          ))}
        </Row>
      </Container>
    </BottomWrapper>
  </>
)
