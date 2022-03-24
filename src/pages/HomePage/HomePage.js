import React from 'react'
import { Link } from 'react-router-dom'
import useHome from '../../hooks/useHome'
import FunctionPopup from '../../components/popup/FunctionPopup'

// import images
import trophy from '../../images/001-trophy 1.svg'
import moneyBag from '../../images/003-money-bag 1.svg'
import cv from '../../images/004-cv 1.svg'

// import css style
import {
  Container,
  AboutUsers,
  UserInfo,
  Avatar,
  UserName,
  UserStatus,
  Announcement,
  NoticeTitle,
  NoticeContent,
  NoticeContentUl,
  NoticeContentLi,
  UserFunctions,
  UserRelated,
  UserDetails,
  UserSalary,
  UserTasks,
  FunctionsIconWrapper,
  FunctionsIcon,
  FunctionsIconTask,
  FunctionsTitle,
  Recommended,
  RecommendedTitle,
  RecommendedContent,
  RecommendedCode,
} from './style.js'

export default function HomePage() {
  const { popUp, closedPage, handleTogglePopUp, handleCopy } = useHome()

  return (
    <Container>
      {/* user's infomation */}
      <AboutUsers>
        <Avatar></Avatar>
        <UserInfo>
          <UserName>李姍姍</UserName>
          <UserStatus>上線中</UserStatus>
        </UserInfo>
      </AboutUsers>

      {/* annoucement and news */}
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
          {/* user's details */}
          <UserDetails as={Link} to="/member">
            <FunctionsIconWrapper>
              <FunctionsIcon src={cv} />
            </FunctionsIconWrapper>
            <FunctionsTitle>會員資訊</FunctionsTitle>
          </UserDetails>

          {/* user's salary */}
          <UserSalary onClick={() => handleTogglePopUp('salary')}>
            <FunctionsIconWrapper>
              <FunctionsIcon src={moneyBag} />
            </FunctionsIconWrapper>
            <FunctionsTitle>薪水查詢</FunctionsTitle>
          </UserSalary>
        </UserRelated>

        {/* tasks */}
        <UserTasks onClick={() => handleTogglePopUp('tasks')}>
          <FunctionsIconWrapper>
            <FunctionsIconTask src={trophy} />
          </FunctionsIconWrapper>
          <FunctionsTitle>平台任務</FunctionsTitle>
        </UserTasks>
      </UserFunctions>

      {/* user's recommended code  */}
      <Recommended>
        <RecommendedTitle>我的推薦碼</RecommendedTitle>

        <RecommendedContent>
          我的推薦碼是Homexin1314520，快點一起來Home心接案賺錢吧！註冊成功還有100元可以領取唷！
        </RecommendedContent>
        <RecommendedCode onClick={handleCopy}>點我複製推薦碼</RecommendedCode>
      </Recommended>

      {/* if popup is true, show function popup */}
      {popUp && (
        <FunctionPopup
          handleTogglePopUp={handleTogglePopUp}
          closedPage={closedPage}
        />
      )}
    </Container>
  )
}
