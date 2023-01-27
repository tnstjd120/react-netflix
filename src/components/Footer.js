import React from 'react'
import styled from 'styled-components'
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaYoutube,
} from 'react-icons/fa'

const Container = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: #fff;
  font-size: 14px;
`

const ContainerInner = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100%;
  padding: 30px 20px;
`

const SocialBox = styled.div`
  display: flex;
  align-items: center;
`

const LinkBox = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px 0;
`

const LinkBoxList = styled.li`
  flex-basis: 25%;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    flex-basis: 50%;
  }
`

const FooterLink = styled.a`
  display: block;
  height: 100%;
  font-size: ${(props) => props.social && '30px'};
  margin-right: ${(props) => props.social && '20px'};
`

const Footer = () => {
  return (
    <Container>
      <ContainerInner>
        <SocialBox>
          <FooterLink social href="/">
            <FaFacebookSquare />
          </FooterLink>
          <FooterLink social href="/">
            <FaInstagram />
          </FooterLink>
          <FooterLink social href="/">
            <FaTwitterSquare />
          </FooterLink>
          <FooterLink social href="/">
            <FaYoutube />
          </FooterLink>
        </SocialBox>

        <LinkBox>
          <LinkBoxList>
            <FooterLink href="/">화면 해설</FooterLink>
          </LinkBoxList>
          <LinkBoxList>
            <FooterLink href="/">고객 센터</FooterLink>
          </LinkBoxList>
          <LinkBoxList>
            <FooterLink href="/">기프트카드</FooterLink>
          </LinkBoxList>
          <LinkBoxList>
            <FooterLink href="/">미디어센터</FooterLink>
          </LinkBoxList>

          <LinkBoxList>
            <FooterLink href="/">투자 정보(IR)</FooterLink>
          </LinkBoxList>
          <LinkBoxList>
            <FooterLink href="/">입사 정보</FooterLink>
          </LinkBoxList>
          <LinkBoxList>
            <FooterLink href="/">이용 약관</FooterLink>
          </LinkBoxList>
          <LinkBoxList>
            <FooterLink href="/">개인정보</FooterLink>
          </LinkBoxList>

          <LinkBoxList>
            <FooterLink href="/">법적 고지</FooterLink>
          </LinkBoxList>
          <LinkBoxList>
            <FooterLink href="/">쿠키 설정</FooterLink>
          </LinkBoxList>
          <LinkBoxList>
            <FooterLink href="/">회사 정보</FooterLink>
          </LinkBoxList>
          <LinkBoxList>
            <FooterLink href="/">문의하기</FooterLink>
          </LinkBoxList>
        </LinkBox>

        <div style={{ fontSize: '12px' }}>C 1997-2023 Netflix, Inc.</div>
      </ContainerInner>
    </Container>
  )
}

export default Footer
