import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// import image
import cv from '../../images/004-cv 1.svg'

// import user's information from api
import { getUser } from '../../userDataApi'

// import css style
import {
  Container,
  MemberHeader,
  MemberHeaderImg,
  MemberHeaderTitle,
  MemberInfo,
  CloseBtn,
  MemberInfoEdit,
  MemberInfoRemind,
  Wrapper,
  SectionTitle,
} from './style.js'

import { Table, Head, Row, Heading, Body, Data } from '../../components/table'

export default function MemberPage() {
  // setting userData state
  const [userData, setUserData] = useState([])

  // update userData's state from getUser API's response when loading page
  useEffect(() => {
    const getUsers = async (id) => {
      try {
        const result = await getUser(id)
        setUserData(result)
      } catch (error) {
        console.log(error)
      }
    }
    getUsers('1')
  }, [])

  return (
    <Container>
      <MemberHeader>
        <MemberHeaderImg src={cv}></MemberHeaderImg>
        <MemberHeaderTitle>會員資訊</MemberHeaderTitle>
      </MemberHeader>

      <MemberInfo>
        <Link to={'/'}>
          <CloseBtn></CloseBtn>
        </Link>

        <Wrapper>
          <SectionTitle>基本資料</SectionTitle>
          <Table>
            <Head>
              <Row>
                <Heading>姓名</Heading>
                <Heading>性別</Heading>
                <Heading>出生年月日</Heading>
                <Heading>身高</Heading>
                <Heading>體重</Heading>
                <Heading>主要服務縣市</Heading>
              </Row>
            </Head>
            <Body>
              <Row key={1}>
                <Data data-label="姓名">{userData.name}</Data>
                <Data data-label="性別">{userData.gender}</Data>
                <Data data-label="出生年月日">{userData.birthday}</Data>
                <Data data-label="身高">{userData.height}公分</Data>
                <Data data-label="體重">{userData.weight}公斤</Data>
                <Data data-label="主要服務縣市">{userData.region}</Data>
              </Row>
            </Body>
          </Table>
          <SectionTitle>聯絡資料</SectionTitle>
          <Table>
            <Head>
              <Row>
                <Heading>手機號碼</Heading>
              </Row>
            </Head>
            <Body>
              <Row key={2}>
                <Data data-label="手機號碼">{userData.phone}</Data>
              </Row>
            </Body>
          </Table>

          <SectionTitle>收款資料</SectionTitle>
          <Table>
            <Head>
              <Row>
                <Heading>銀行代碼</Heading>
                <Heading>銀行帳號</Heading>
              </Row>
            </Head>
            <Body>
              <Row key={3}>
                <Data data-label="銀行代碼">{userData.bankCode}</Data>
                <Data data-label="銀行帳號">{userData.bankAccount}</Data>
              </Row>
            </Body>
          </Table>
        </Wrapper>

        {/* link to editMemberPage when button  */}
        <MemberInfoEdit as={Link} to="/member/edit">
          修改資料
        </MemberInfoEdit>

        <MemberInfoRemind>
          註: 灰色字體為您修改的新資料，待管理員審核完成後即會變回黑色。
        </MemberInfoRemind>
      </MemberInfo>
    </Container>
  )
}
