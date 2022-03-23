import React, { useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import { MEDIA_QUERY_SM } from '../../styles/breakpoints'
import './DatePicker.css'
import Backdrop from '../../components/popup/Backdrop'
import cv from '../../images/004-cv 1.svg'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import {
  InputLabel,
  Input,
  InputErrorMessage,
  Select,
} from '../../components/textField'
import { cities } from '../../constants/cities'
// import user from '../../userData'
import DatePicker from 'react-mobile-datepicker'
import { getUser, updateUser } from '../../userDataApi'

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

const ModifyInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 87%%;
  margin-top: 24px;
  padding: 24px;
  background-color: ${(props) => props.theme.general_100};
  box-shadow: 5px -1px 9px rgba(0, 0, 0, 0.25);
  border-radius: 20px 20px 0px 0px;
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

const ModifyInfoTitle = styled.div`
  font-family: 'Noto Sans TC';
  font-weight: 700;
  font-size: 25px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
`

const ModifyInfoRemind = styled.div`
  margin-top: 16px;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.04em;
  font-weight: 400;
  font-size: 17px;
  color: ${(props) => props.theme.general_500};
`

const InfoWrapper = styled.div`
  width: 100%;
  margin-top: 24px;
`

const InfoItem = styled.div`
  display: flex;
`

const ModifyLabel = styled(InputLabel)`
  font-weight: 600;
  font-size: 17px;
  width: 42%;
  margin-right: 18px;
  padding-top: 24px;
  text-align: center;
  border-bottom: 2px solid ${(props) => props.theme.general_700};
`
const ModifyInput = styled(Input)`
  width: 58%;
  padding: 8px 15px;
  font-weight: 500;
  font-size: 16px;
  background: #f6f6f6;
  border: 1.5px solid ${(props) => props.theme.general_400};
  box-sizing: border-box;
  border-radius: 6px;
`

const ModifyInputMeasurement = styled.div`
  width: 58%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`
const ModifyInputSmall = styled(ModifyInput)`
  width: 72%;
  margin-right: 16px;
`
const InputMeasure = styled.div`
  font-weight: 600;
  font-size: 16px;
`

const ModifySelect = styled(Select)`
  width: 58%;
  font-weight: 500;
  font-size: 16px;
`

const ModifyOption = styled.option``

const Announcement = styled.div`
  margin: 24px auto;
`
const NoticeTitle = styled.div`
  font-family: 'Noto Sans TC';
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  padding-bottom: 8px;
  color: ${(props) => props.theme.general_500};
`
const NoticeContent = styled.div`
  width: 100%;
  margin-top: 8px;
  padding: 16px;
  padding-left: 32px;
  border-radius: 20px;
  text-align: left;
  background-color: ${(props) => props.theme.general_000};
  border: 1px solid ${(props) => props.theme.general_400};
`

const NoticeContentUl = styled.ul``

const NoticeContentLi = styled.li`
  list-style-type: normal;
  font-weight: 400;
  font-size: 14px;
  color: ${(props) => props.theme.general_700};
`

const ModifyInfoButtons = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  ${MEDIA_QUERY_SM} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const BackToMemberInfoBtn = styled.button`
  width: 135px;
  height: 59px;
  background: ${(props) => props.theme.general_300};
  border: 2px solid rgba(255, 172, 48, 0.5);
  border-radius: 50px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  align-items: center;
  transition: ease-in 0.15s;
  opacity: 0.2;
  &:hover {
    opacity: 1;
  }
`

const SaveMemberInfoBtn = styled.button`
  width: 135px;
  height: 59px;
  padding-left: 16px;
  position: absolute;
  right: 0px;
  background: ${(props) => props.theme.general_300};
  border: 2px solid rgba(255, 172, 48, 0.5);
  border-radius: 50px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  align-items: center;
  opacity: 0.2;
  transition: ease-in 0.15s;
  &:hover {
    opacity: 1;
  }

  ${MEDIA_QUERY_SM} {
    position: relative;
    right: unset;
    margin-top: 16px;
  }
`

const BtnIcon = styled.div`
  width: 58px;
  height: 58px;
  font-size: 24px;
  text-align: center;
  border-radius: 50%;
  background: rgba(255, 172, 48, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`
const BtnText = styled.div`
  width: 57%;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.04em;
`

export default function EditMemberPage() {
  // 設定 userData 的 state
  const [userData, setUserData] = useState({})

  // 設定 錯誤訊息 errorMessages 的 state，預設為空物件
  const [errorMessages, setErrorMessages] = useState({})

  // 設定 是否為提交 isSubmitting 的 state，預設為 false
  const [isSubmitting, setIsSubmitting] = useState(false)

  const navigate = useNavigate()
  const [datePopup, setDatePopup] = useState({
    time: new Date(),
    isOpen: false,
  })

  const handleToggle = (isOpen) => () => {
    setDatePopup({ isOpen })
  }

  const handleSelect = (time) => {
    setDatePopup({ time, isOpen: false })
    setUserData({
      ...userData,
      birthday: time.toLocaleDateString('zh-TW'),
    })
  }

  const dateConfig = {
    year: {
      format: 'YYYY',
      caption: 'Year',
      step: 1,
    },
    month: {
      format: 'MM',
      caption: 'Mon',
      step: 1,
    },
    date: {
      format: 'DD',
      caption: 'Day',
      step: 1,
    },
  }

  // 點擊日期的 input 後
  const handlePopupDate = () => {
    setDatePopup({ isOpen: true })
  }

  // select 縣市，偵測到 onchange 時執行
  const handleChangeRegion = (e) => {
    const selected = e.target.value
    //  將選擇的身份更新該會員到 UpdateAuthorityData 的 state
    setUserData({
      ...userData,
      region: selected,
    })
  }

  // 當輸入框內有值時
  const handleInput = (e) => {
    const { name, value } = e.target
    // 將輸入的值更新到 userData 的 state
    setUserData({
      ...userData,
      [name]: value,
    })
    // 清空 errorMessages 的 state
    setErrorMessages({
      ...errorMessages,
      [e.target.name]: '',
    })
  }

  // 驗證輸入內容的格式
  const validateInfo = (values) => {
    let errors = {}

    // 如果沒有輸入任何的值，則顯示'此欄位為必填'
    if (!values.name) {
      errors.name = '此欄位為必填'
    }

    // 如果沒有輸入任何的值，則顯示'此欄位為必填'
    if (!values.height) {
      errors.height = '此欄位為必填'
      // 如果有輸入值，則驗證是否符合格式（需要檢查是否小於300大於100）
    } else if (
      /[^0-9]/g.test(values.height) ||
      values.height < 100 ||
      values.height > 300
    ) {
      errors.height = '身高有誤'
    }

    // 如果沒有輸入任何的值，則顯示'此欄位為必填'
    if (!values.weight) {
      errors.weight = '此欄位為必填'
      // 如果有輸入值，則驗證是否符合格式（需要檢查是否小於200大於20）
    } else if (
      /[^0-9]/g.test(values.weight) ||
      values.weight < 20 ||
      values.weight > 200
    ) {
      errors.weight = '體重有誤'
    }

    // 如果沒有輸入任何的值，則顯示'此欄位為必填'
    if (!values.phone) {
      errors.phone = '此欄位為必填'
      // 如果有輸入值，則驗證是否符合格式（需要檢查是否為十碼）(^09\d{2}(\d{6}|-\d{3}-\d{3})$)
    } else if (!/^09\d{2}[ -]?\d{3}[ -]?\d{3}$/.test(values.phone)) {
      errors.phone = '電話格式不正確'
    }

    // 如果沒有輸入任何的值，則顯示'此欄位為必填'
    if (!values.bankCode) {
      errors.bankCode = '此欄位為必填'
      // 如果有輸入值，則驗證是否符合格式（需要檢查是否為三碼）
    } else if (!/^\d{3}$/.test(values.bankCode)) {
      errors.bankCode = '銀行代碼格式不正確'
    }

    if (!values.bankAccount) {
      // 如果沒有輸入任何的值，則顯示'此欄位為必填'
      errors.bankAccount = '此欄位為必填'
      // 如果有輸入值，則驗證是否符合格式（需要檢查是否介於9-14碼）
    } else if (!/^\d{9,14}$/.test(values.bankAccount)) {
      errors.bankAccount = '銀行帳號格式不正確'
    }
    return errors
  }

  useEffect(() => {
    // setUserData(user);
    const doGetUser = async (id) => {
      try {
        const result = await getUser(id)
        setUserData(result)
      } catch (error) {
        console.log(error)
      }
    }
    doGetUser('1')
  }, [])

  const handleSubmit = () => {
    setErrorMessages(validateInfo(userData))
    setIsSubmitting(true)
    console.log(userData)
  }

  const confirmSubmit = useCallback(() => {
    if (Object.keys(errorMessages).length === 0 && isSubmitting) {
      const UpdateUser = async (id, data) => {
        try {
          await updateUser(id, data)
        } catch (error) {
          console.log(error)
        }
      }

      UpdateUser('1', userData)
      navigate('/member')
    }
  }, [userData, errorMessages, isSubmitting])

  useEffect(() => {
    confirmSubmit()
  }, [confirmSubmit])

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
        <DatePicker
          isOpen={datePopup.isOpen}
          isPopup={true}
          showCaption={true}
          dateConfig={dateConfig}
          confirmText={'確認'}
          showHeader={false}
          value={new Date(userData.birthday)}
          onSelect={handleSelect}
          onCancel={handleToggle(false)}
        />
        <InfoWrapper>
          <React.Fragment key={userData.id}>
            <InfoItem>
              <ModifyLabel>姓名</ModifyLabel>
              <ModifyInput
                name="name"
                defaultValue={userData.name}
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
                defaultValue={userData.birthday}
                onFocus={handlePopupDate}
              ></ModifyInput>
            </InfoItem>
            <InfoItem>
              <ModifyLabel>身高</ModifyLabel>
              <ModifyInputMeasurement>
                <ModifyInputSmall
                  name="height"
                  defaultValue={userData.height}
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
                  defaultValue={userData.weight}
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
              {userData && userData.region && (
                <ModifySelect
                  label="縣市"
                  name="region"
                  defaultValue={userData && userData.region}
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
                defaultValue={userData.phone}
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
                defaultValue={userData.bankCode}
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
                defaultValue={userData.bankAccount}
                onChange={handleInput}
              ></ModifyInput>
            </InfoItem>
            {errorMessages.bankAccount && (
              <InputErrorMessage>{errorMessages.bankAccount}</InputErrorMessage>
            )}
          </React.Fragment>
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

          {/* <Link to={'/member'}> */}
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
          {/* </Link> */}
        </ModifyInfoButtons>
      </ModifyInfo>
    </Container>
  )
}
