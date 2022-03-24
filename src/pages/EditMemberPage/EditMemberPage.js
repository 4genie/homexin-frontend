import React from 'react'
import { Link } from 'react-router-dom'
import DatePicker from 'react-mobile-datepicker'
import useEditMember from '../../hooks/useEditMember'
import './DatePicker.css'
import { InputErrorMessage } from '../../components/textField'
import Backdrop from '../../components/popup/Backdrop'
import cv from '../../images/004-cv 1.svg'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { cities } from '../../constants/cities'

// import css style
import {
  Container,
  MemberHeader,
  MemberHeaderImg,
  MemberHeaderTitle,
  ModifyInfo,
  CloseBtn,
  ModifyInfoTitle,
  ModifyInfoRemind,
  InfoWrapper,
  InfoItem,
  ModifyLabel,
  ModifyInput,
  ModifyInputMeasurement,
  ModifyInputSmall,
  InputMeasure,
  ModifySelect,
  ModifyOption,
  Announcement,
  NoticeTitle,
  NoticeContent,
  NoticeContentUl,
  NoticeContentLi,
  ModifyInfoButtons,
  BackToMemberInfoBtn,
  SaveMemberInfoBtn,
  BtnIcon,
  BtnText,
} from './style.js'

export default function EditMemberPage() {
  const {
    editUserData,
    errorMessages,
    datePopup,
    dateConfig,
    handleCancelPopup,
    handleSelect,
    handlePopupDate,
    handleChangeRegion,
    handleInput,
    handleSubmit,
  } = useEditMember()
  return (
    <Container>
      <MemberHeader>
        <MemberHeaderImg src={cv}></MemberHeaderImg>
        <MemberHeaderTitle>會員資訊</MemberHeaderTitle>
      </MemberHeader>

      <ModifyInfo>
        <Link to={'/'}>
          <CloseBtn></CloseBtn>
        </Link>
        <ModifyInfoTitle>修改您的照服員基本資料</ModifyInfoTitle>
        <ModifyInfoRemind>
          請選擇您需要修改的欄位進行填寫，若不需修改，請保留原始資料即可。
        </ModifyInfoRemind>

        {datePopup.isOpen && <Backdrop></Backdrop>}
        {console.log('birthday', editUserData.birthday)}
        <DatePicker
          isOpen={datePopup.isOpen}
          isPopup={true}
          showCaption={true}
          dateConfig={dateConfig}
          confirmText={'確認'}
          showHeader={false}
          value={new Date(editUserData.birthday)}
          onSelect={handleSelect}
          onCancel={handleCancelPopup}
        />
        <InfoWrapper key={editUserData.id}>
          <InfoItem>
            <ModifyLabel>姓名</ModifyLabel>
            <ModifyInput
              name="name"
              defaultValue={editUserData.name}
              onChange={handleInput}
            ></ModifyInput>
          </InfoItem>
          {errorMessages.name && (
            <InputErrorMessage>{errorMessages.name}</InputErrorMessage>
          )}

          <InfoItem>
            <ModifyLabel>出生年月日</ModifyLabel>
            <ModifyInput
              name="birthday"
              value={editUserData.birthday}
              onFocus={handlePopupDate}
            ></ModifyInput>
          </InfoItem>

          <InfoItem>
            <ModifyLabel>身高</ModifyLabel>
            <ModifyInputMeasurement>
              <ModifyInputSmall
                name="height"
                defaultValue={editUserData.height}
                onChange={handleInput}
              ></ModifyInputSmall>
              <InputMeasure>公分</InputMeasure>
            </ModifyInputMeasurement>
          </InfoItem>
          {errorMessages.height && (
            <InputErrorMessage>{errorMessages.height}</InputErrorMessage>
          )}

          <InfoItem>
            <ModifyLabel>體重</ModifyLabel>
            <ModifyInputMeasurement>
              <ModifyInputSmall
                name="weight"
                defaultValue={editUserData.weight}
                onChange={handleInput}
              ></ModifyInputSmall>
              <InputMeasure>公斤</InputMeasure>
            </ModifyInputMeasurement>
          </InfoItem>
          {errorMessages.weight && (
            <InputErrorMessage>{errorMessages.weight}</InputErrorMessage>
          )}

          <InfoItem>
            <ModifyLabel>主要服務縣市</ModifyLabel>
            {editUserData && editUserData.region && (
              <ModifySelect
                label="縣市"
                name="region"
                defaultValue={editUserData && editUserData.region}
                onChange={(e) => {
                  handleChangeRegion(e)
                }}
              >
                {cities.map((city, index) => {
                  return (
                    <ModifyOption key={index} value={city.key}>
                      {city.value}
                    </ModifyOption>
                  )
                })}
              </ModifySelect>
            )}
          </InfoItem>

          <InfoItem>
            <ModifyLabel>電話</ModifyLabel>
            <ModifyInput
              type="tel"
              name="phone"
              defaultValue={editUserData.phone}
              onChange={handleInput}
            ></ModifyInput>
          </InfoItem>
          {errorMessages.phone && (
            <InputErrorMessage>{errorMessages.phone}</InputErrorMessage>
          )}

          <InfoItem>
            <ModifyLabel>銀行代號</ModifyLabel>
            <ModifyInput
              name="bankCode"
              defaultValue={editUserData.bankCode}
              onChange={handleInput}
            ></ModifyInput>
          </InfoItem>
          {errorMessages.bankCode && (
            <InputErrorMessage>{errorMessages.bankCode}</InputErrorMessage>
          )}

          <InfoItem>
            <ModifyLabel>銀行帳號</ModifyLabel>
            <ModifyInput
              name="bankAccount"
              defaultValue={editUserData.bankAccount}
              onChange={handleInput}
            ></ModifyInput>
          </InfoItem>
          {errorMessages.bankAccount && (
            <InputErrorMessage>{errorMessages.bankAccount}</InputErrorMessage>
          )}
        </InfoWrapper>

        <Announcement>
          <NoticeTitle>注意事項</NoticeTitle>
          <NoticeContent>
            <NoticeContentUl>
              <NoticeContentLi>
                按下下方按鈕送出後，可以提醒Home心小幫手趕快幫您審核唷！
              </NoticeContentLi>
              <NoticeContentLi>
                需要小幫手審核通過後，才能再次接案。
              </NoticeContentLi>
            </NoticeContentUl>
          </NoticeContent>
        </Announcement>

        <ModifyInfoButtons>
          <Link to={'/member'}>
            <BackToMemberInfoBtn>
              <BtnIcon>
                <FiArrowLeft size="32px" />
              </BtnIcon>
              <BtnText>會員資料</BtnText>
            </BackToMemberInfoBtn>
          </Link>

          <SaveMemberInfoBtn onClick={handleSubmit}>
            <BtnText>
              下一步
              <br />
              送出修改
            </BtnText>
            <BtnIcon>
              <FiArrowRight size="32px" />
            </BtnIcon>
          </SaveMemberInfoBtn>
        </ModifyInfoButtons>
      </ModifyInfo>
    </Container>
  )
}
