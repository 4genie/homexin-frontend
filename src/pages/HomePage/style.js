import styled from 'styled-components'
import userAvatar from '../../images/userAvatar.png'

export const Container = styled.div`
  background-color: ${(props) => props.theme.primary_300};
  margin: 0 auto;
`

export const AboutUsers = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 1.5rem;
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const Avatar = styled.div`
  background-image: url(${userAvatar});
  background-position: center;
  background-repeat: no-repeat;
  width: 69px;
  height: 69px;
  margin-right: 1.125rem;
`
export const UserName = styled.div`
  font-weight: 700;
  font-size: 1.875rem;
  line-height: 154.3%;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.general_100};
`
export const UserStatus = styled.div`
  font-weight: 700;
  font-size: 0.9375rem;
  line-height: 154.3%;
  display: flex;
  align-items: center;
  color: #b9dea8;
`

export const Announcement = styled.div`
  border-radius: 1.25rem;
  margin: 1.5rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.general_300};
  border: 1px solid ${(props) => props.theme.general_400};
  box-sizing: border-box;
`
export const NoticeTitle = styled.div`
  font-family: 'Noto Sans TC';
  font-weight: 700;
  font-size: 1.5rem;
  text-align: center;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${(props) => props.theme.general_200};
  color: ${(props) => props.theme.general_700};
`
export const NoticeContent = styled.div`
  margin-top: 0.5rem;
  margin-left: 1rem;
`

export const NoticeContentUl = styled.ul``

export const NoticeContentLi = styled.li`
  list-style-type: disc;
  font-weight: 400;
  font-size: 0.875rem;
  color: ${(props) => props.theme.general_700};
`

export const UserFunctions = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem;
`

export const UserRelated = styled.div`
  display: flex;
  justify-content: space-between;
`
export const UserDetails = styled.button`
  height: 101px;
  position: relative;
  width: 47%;
  border-radius: 0.9375rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.general_100};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`
export const UserSalary = styled.button`
  height: 101px;
  position: relative;
  width: 47%;
  border-radius: 0.9375rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.general_100};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`
export const UserTasks = styled.button`
  height: 101px;
  position: relative;
  border-radius: 15px;
  margin-top: 1rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.general_100};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`

export const FunctionsIconWrapper = styled.div``
export const FunctionsIcon = styled.img`
  width: 100%;
  width: 51px;
  height: 51px;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`

export const FunctionsIconTask = styled(FunctionsIcon)`
  width: 85px;
  height: 85px;
`
export const FunctionsTitle = styled.div`
  font-family: 'Noto Sans HK';
  font-weight: 700;
  font-size: 1.5625rem;
  letter-spacing: 0.04em;
  color: ${(props) => props.theme.general_700};
  position: absolute;
  bottom: 0.5rem;
  left: 0.5rem;
`

export const Recommended = styled.div`
  display: flex;
  flex-direction: column;
  width: 87%%;
  margin-top: 1.5rem;
  padding: 2rem;
  background-color: ${(props) => props.theme.general_100};
  box-shadow: 5px -1px 9px rgba(0, 0, 0, 0.25);
  border-radius: 1.25rem 1.25rem 0px 0px;
`
export const RecommendedTitle = styled.div`
  font-family: 'Noto Sans TC';
  font-weight: 700;
  font-size: 1.5625rem;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
`
export const RecommendedContent = styled.div`
  margin-top: 0.625rem;
  font-family: 'Noto Sans HK';
  font-weight: 400;
  font-size: 1.125rem;
  color: ${(props) => props.theme.general_700};
`

export const RecommendedCode = styled.button`
  width: 189px;
  padding: 0.625rem 0.9375rem;
  margin: 1.0625rem auto 0px;
  background: ${(props) => props.theme.primary_200};
  border-radius: 0.3125rem;
  font-weight: 500;
  font-size: 1.125rem;
  text-align: center;
  letter-spacing: 1.5px;
  color: ${(props) => props.theme.general_100};
`
