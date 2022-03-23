import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import userAvatar from '../../images/userAvatar.png'
import trophy from '../../images/001-trophy 1.svg'
import moneyBag from '../../images/003-money-bag 1.svg'
import cv from '../../images/004-cv 1.svg'
import FunctionPopup from '../../components/popup/FunctionPopup'

const Container = styled.div`
  background-color: ${(props) => props.theme.primary_300};
  margin: 0 auto;
`

const AboutUsers = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 24px;
`

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`

const Avatar = styled.div`
  background-image: url(${userAvatar});
  background-position: center;
  background-repeat: no-repeat;
  width: 69px;
  height: 69px;
  margin-right: 18px;
`
const UserName = styled.div`
  font-weight: 700;
  font-size: 30px;
  line-height: 154.3%;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.general_100};
`
const UserStatus = styled.div`
  font-weight: 700;
  font-size: 15px;
  line-height: 154.3%;
  display: flex;
  align-items: center;
  color: #b9dea8;
`

const Announcement = styled.div`
  border-radius: 20px;
  margin: 24px;
  padding: 16px;
  background-color: ${(props) => props.theme.general_300};
  border: 1px solid ${(props) => props.theme.general_400};
  box-sizing: border-box;
`
const NoticeTitle = styled.div`
  font-family: 'Noto Sans TC';
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  padding-bottom: 8px;
  border-bottom: 2px solid ${(props) => props.theme.general_200};
  color: ${(props) => props.theme.general_700};
`
const NoticeContent = styled.div`
  margin-top: 8px;
  margin-left: 16px;
`

const NoticeContentUl = styled.ul``

const NoticeContentLi = styled.li`
  list-style-type: disc;
  font-weight: 400;
  font-size: 14px;
  color: ${(props) => props.theme.general_700};
`

const UserFunctions = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px;
`

const UserRelated = styled.div`
  display: flex;
  justify-content: space-between;
`
const UserDetails = styled.button`
  height: 101px;
  position: relative;
  width: 47%;
  border-radius: 15px;
  padding: 16px;
  background-color: ${(props) => props.theme.general_100};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`
const UserSalary = styled.button`
  height: 101px;
  position: relative;
  width: 47%;
  border-radius: 15px;
  padding: 16px;
  background-color: ${(props) => props.theme.general_100};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`
const UserTasks = styled.button`
  height: 101px;
  position: relative;
  border-radius: 15px;
  margin-top: 16px;
  padding: 16px;
  background-color: ${(props) => props.theme.general_100};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`

const FunctionsIconWrapper = styled.div``
const FunctionsIcon = styled.img`
  width: 100%;
  width: 51px;
  height: 51px;
  position: absolute;
  top: 8px;
  right: 8px;
`

const FunctionsIconTask = styled(FunctionsIcon)`
  width: 85px;
  height: 85px;
`
const FunctionsTitle = styled.div`
  font-family: 'Noto Sans HK';
  font-weight: 700;
  font-size: 25px;
  letter-spacing: 0.04em;
  color: ${(props) => props.theme.general_700};
  position: absolute;
  bottom: 8px;
  left: 8px;
`

const Recommended = styled.div`
  display: flex;
  flex-direction: column;
  width: 87%%;
  margin-top: 24px;
  padding: 32px;
  background-color: ${(props) => props.theme.general_100};
  box-shadow: 5px -1px 9px rgba(0, 0, 0, 0.25);
  border-radius: 20px 20px 0px 0px;
`
const RecommendedTitle = styled.div`
  font-family: 'Noto Sans TC';
  font-weight: 700;
  font-size: 25px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
`
const RecommendedContent = styled.div`
  margin-top: 10px;
  font-family: 'Noto Sans HK';
  font-weight: 400;
  font-size: 18px;
  color: ${(props) => props.theme.general_700};
`

const RecommendedCode = styled.button`
  width: 189px;
  padding: 10px 15px;
  margin: 17px auto 0px;
  background: ${(props) => props.theme.primary_200};
  border-radius: 5px;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
  letter-spacing: 1.5px;
  color: ${(props) => props.theme.general_100};
`

export default function HomePage() {
  const [popUp, setPopUp] = useState(false)
  const [closedPage, setClosedPage] = useState('')

  const handleTogglePopUp = (page) => {
    setPopUp(!popUp)
    if (page === 'salary') setClosedPage('薪水查詢')
    if (page === 'tasks') setClosedPage('平台任務')
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText('Homexin1314520')
    alert('推薦碼複製成功！')
  }

  return (
    <Container>
      <AboutUsers>
        <Avatar></Avatar>
        <UserInfo>
          <UserName>李姍姍</UserName>
          <UserStatus>上線中</UserStatus>
        </UserInfo>
      </AboutUsers>

      <Announcement>
        <NoticeTitle>Home心公告</NoticeTitle>
        <NoticeContent>
          <NoticeContentUl>
            <NoticeContentLi>
              疫情期間，大家要多注意勤洗手，小心健康！
            </NoticeContentLi>
            <NoticeContentLi>
              若您已經施打完疫苗，可以透過小幫手回報給我們唷！
            </NoticeContentLi>
          </NoticeContentUl>
        </NoticeContent>
      </Announcement>

      <UserFunctions>
        <UserRelated>
          <UserDetails as={Link} to="/member">
            <FunctionsIconWrapper>
              <FunctionsIcon src={cv} />
            </FunctionsIconWrapper>
            <FunctionsTitle>會員資訊</FunctionsTitle>
          </UserDetails>
          <UserSalary onClick={() => handleTogglePopUp('salary')}>
            <FunctionsIconWrapper>
              <FunctionsIcon src={moneyBag} />
            </FunctionsIconWrapper>
            <FunctionsTitle>薪水查詢</FunctionsTitle>
          </UserSalary>
        </UserRelated>

        <UserTasks onClick={() => handleTogglePopUp('tasks')}>
          <FunctionsIconWrapper>
            <FunctionsIconTask src={trophy} />
          </FunctionsIconWrapper>
          <FunctionsTitle>平台任務</FunctionsTitle>
        </UserTasks>
      </UserFunctions>

      <Recommended>
        <RecommendedTitle>我的推薦碼</RecommendedTitle>
        <RecommendedContent>
          我的推薦碼是Homexin1314520，快點一起來Home心接案賺錢吧！註冊成功還有100元可以領取唷！
        </RecommendedContent>
        <RecommendedCode onClick={handleCopy}>點我複製推薦碼</RecommendedCode>
      </Recommended>

      {popUp && (
        <FunctionPopup
          handleTogglePopUp={handleTogglePopUp}
          closedPage={closedPage}
        />
      )}
    </Container>
  )
}
