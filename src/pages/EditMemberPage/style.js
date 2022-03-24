import styled from 'styled-components'
import { MEDIA_QUERY_SM } from '../../styles/breakpoints'
import { InputLabel, Input, Select } from '../../components/textField'

export const Container = styled.div`
  background-color: ${(props) => props.theme.primary_300};
  margin: 0 auto;
`

export const MemberHeader = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1.5rem;
`

export const MemberHeaderImg = styled.img`
  width: 69px;
  height: 69px;
  margin-right: 1.125rem;
`
export const MemberHeaderTitle = styled.div`
  font-weight: 700;
  font-size: 1.875rem;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.general_100};
`

export const ModifyInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 87%%;
  margin-top: 1.5rem;
  padding: 1.5rem;
  background-color: ${(props) => props.theme.general_100};
  box-shadow: 5px -1px 9px rgba(0, 0, 0, 0.25);
  border-radius: 1.25rem 1.25rem 0px 0px;
`

export const CloseBtn = styled.button`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  width: 0.9375rem;
  height: 0.9375rem;
  opacity: 0.3;

  :hover {
    opacity: 1;
  }

  :before, :after {
    content: ' ';
    position: absolute;
    height: 1.25rem;
    width: 0.125rem;
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

export const ModifyInfoTitle = styled.div`
  font-family: 'Noto Sans TC';
  font-weight: 700;
  font-size: 1.5625rem;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
`

export const ModifyInfoRemind = styled.div`
  margin-top: 1rem;
  font-weight: 600;
  font-size: 0.9375rem;
  letter-spacing: 0.04em;
  font-weight: 400;
  font-size: 1.0625rem;
  color: ${(props) => props.theme.general_500};
`

export const InfoWrapper = styled.div`
  width: 100%;
  margin-top: 1.5rem;
`

export const InfoItem = styled.div`
  display: flex;
`

export const ModifyLabel = styled(InputLabel)`
  font-weight: 600;
  font-size: 1.0625rem;
  width: 42%;
  margin-right: 1.125rem;
  padding-top: 1.5rem;
  text-align: center;
  border-bottom: 0.125rem solid ${(props) => props.theme.general_700};
`
export const ModifyInput = styled(Input)`
  width: 58%;
  padding: 0.5rem 0.9375rem;
  font-weight: 500;
  font-size: 1rem;
  background: #f6f6f6;
  border: 1.5px solid ${(props) => props.theme.general_400};
  box-sizing: border-box;
  border-radius: 0.375rem;
`

export const ModifyInputMeasurement = styled.div`
  width: 58%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
`
export const ModifyInputSmall = styled(ModifyInput)`
  width: 72%;
  margin-right: 1rem;
`
export const InputMeasure = styled.div`
  font-weight: 600;
  font-size: 1rem;
`

export const ModifySelect = styled(Select)`
  width: 58%;
  font-weight: 500;
  font-size: 1rem;
`

export const ModifyOption = styled.option``

export const Announcement = styled.div`
  margin: 1.5rem auto;
`
export const NoticeTitle = styled.div`
  font-family: 'Noto Sans TC';
  font-weight: 700;
  font-size: 1.25rem;
  text-align: center;
  padding-bottom: 0.5rem;
  color: ${(props) => props.theme.general_500};
`
export const NoticeContent = styled.div`
  width: 100%;
  margin-top: 0.5rem;
  padding: 1rem;
  padding-left: 2rem;
  border-radius: 1.25rem;
  text-align: left;
  background-color: ${(props) => props.theme.general_000};
  border: 0.0625rem solid ${(props) => props.theme.general_400};
`

export const NoticeContentUl = styled.ul``

export const NoticeContentLi = styled.li`
  list-style-type: normal;
  font-weight: 400;
  font-size: 0.875rem;
  color: ${(props) => props.theme.general_700};
`

export const ModifyInfoButtons = styled.div`
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

export const BackToMemberInfoBtn = styled.button`
  width: 135px;
  height: 59px;
  background: ${(props) => props.theme.general_300};
  border: 0.125rem solid rgba(255, 172, 48, 0.5);
  border-radius: 3.125rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  align-items: center;
  transition: ease-in 0.15s;
  opacity: 0.2;
  &:hover {
    opacity: 1;
  }
`

export const SaveMemberInfoBtn = styled.button`
  width: 135px;
  height: 59px;
  padding-left: 1rem;
  position: absolute;
  right: 0px;
  background: ${(props) => props.theme.general_300};
  border: 0.125rem solid rgba(255, 172, 48, 0.5);
  border-radius: 3.125rem;
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
    margin-top: 1rem;
  }
`

export const BtnIcon = styled.div`
  width: 58px;
  height: 58px;
  font-size: 1.5rem;
  text-align: center;
  border-radius: 50%;
  background: rgba(255, 172, 48, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`
export const BtnText = styled.div`
  width: 57%;
  font-weight: 400;
  font-size: 0.875rem;
  letter-spacing: 0.04em;
`
