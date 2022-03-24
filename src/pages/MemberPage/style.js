import styled from 'styled-components'

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

export const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 87%%;
  margin-top: 1.5rem;
  padding: 1.5rem;
  background-color: ${(props) => props.theme.general_100};
  box-shadow: 5px -1px 9px rgba(0, 0, 0, 0.25);
  border-radius: 1.25rem 1.25rem 0px 0px;
  height: 100vh;
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

export const MemberInfoEdit = styled.button`
  width: 7.5625rem;
  padding: 0.4375rem 1.1875rem;
  margin: 1rem auto 0px;
  background: ${(props) => props.theme.primary_200};
  border-radius: 0.3125rem;
  font-weight: 500;
  font-size: 1.125rem;
  text-align: center;
  letter-spacing: 1.5px;
  color: ${(props) => props.theme.general_100};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  // transition: ease-in 0.15s;

  // &:hover {
  //   background: ${(props) => props.theme.primary_200};
  // }
`

export const MemberInfoRemind = styled.div`
  margin-top: 2rem;
  font-weight: 600;
  font-size: 0.9375rem;
  letter-spacing: 0.04em;
  color: ${(props) => props.theme.warning_100};
`
export const Wrapper = styled.div``

export const SectionTitle = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-weight: 900;
  font-size: 1.5625rem;
  letter-spacing: 0.04em;
`
