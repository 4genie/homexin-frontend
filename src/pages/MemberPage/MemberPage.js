import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import cv from '../../images/004-cv 1.svg'
import { Table, Head, Row, Heading, Body, Data } from '../../components/table'
import { getUser } from '../../userDataApi'

const Container = styled.div`
  background-color: ${(props) => props.theme.primary_300};
  margin: 0 auto;
`

const MemberHeader = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 24px;
`

const MemberHeaderImg = styled.img`
  width: 69px;
  height: 69px;
  margin-right: 18px;
`
const MemberHeaderTitle = styled.div`
  font-weight: 700;
  font-size: 30px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.general_100};
`

const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 87%%;
  margin-top: 24px;
  padding: 24px;
  background-color: ${(props) => props.theme.general_100};
  box-shadow: 5px -1px 9px rgba(0, 0, 0, 0.25);
  border-radius: 20px 20px 0px 0px;
  height: 100vh;
`

const CloseBtn = styled.button`
  position: absolute;
  right: 24px;
  top: 24px;
  width: 15px;
  height: 15px;
  opacity: 0.3;

  :hover {
    opacity: 1;
  }

  :before, :after {
    content: ' ';
    position: absolute;
    height: 20px;
    width: 2px;
    background-color:  ${(props) => props.theme.general_700};
  }

  :before {
    transform: rotate(45deg);
  }

  :after {
    transform: rotate(-45deg);
  }
}
`

const MemberInfoEdit = styled.button`
  width: 121px;
  padding: 7px 19px;
  margin: 16px auto 0px;
  background: ${(props) => props.theme.primary_200};
  border-radius: 5px;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  letter-spacing: 1.5px;
  color: ${(props) => props.theme.general_100};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`

const MemberInfoRemind = styled.div`
  margin-top: 32px;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.04em;
  color: ${(props) => props.theme.warning_100};
`
const Wrapper = styled.div``

const SectionTitle = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
  font-weight: 900;
  font-size: 25px;
  letter-spacing: 0.04em;
`

export default function MemberPage() {
  const [userData, setUserData] = useState([])
  useEffect(() => {
    // setUserData(user);
    const getUsers = async (id) => {
      try {
        const result = await getUser(id)
        console.log(result)
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
                <Heading />
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
            <SectionTitle>聯絡資料</SectionTitle>
            <Table>
              <Head>
                <Row>
                  <Heading>手機號碼</Heading>
                  <Heading />
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
                  <Heading />
                </Row>
              </Head>
              <Body>
                <Row key={3}>
                  <Data data-label="銀行代碼">{userData.bankCode}</Data>
                  <Data data-label="銀行帳號">{userData.bankAccount}</Data>
                </Row>
              </Body>
            </Table>
          </Table>
        </Wrapper>

        <MemberInfoEdit
          as={Link}
          to="/member/edit"
          userData={userData}
          setUserData={setUserData}
        >
          修改資料
        </MemberInfoEdit>
        <MemberInfoRemind>
          註: 灰色字體為您修改的新資料，待管理員審核完成後即會變回黑色。
        </MemberInfoRemind>
      </MemberInfo>
    </Container>
  )
}
