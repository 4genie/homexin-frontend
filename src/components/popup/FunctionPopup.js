import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Backdrop from './Backdrop'
import Popup from './Popup'

const PopupContainer = styled(Popup)`
  font-family: 'Noto Sans TC';
`

const PopupCloseBtn = styled.button`
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
    background-color: rgba(0, 0, 0, 0.6);
  }
  :before {
    transform: rotate(45deg);
  }
  :after {
    transform: rotate(-45deg);
  }
}
`
const PopupTitle = styled.div`
  margin-top: 24px;
  color: ${(props) => props.theme.warning_100};
  font-weight: 700;
  font-size: 20px;
  text-align: center;
`

const PopupContent = styled.div`
  margin: 36px auto 120px;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  color: ${(props) => props.theme.general_600};
`
export default function FunctionPopup({ handleTogglePopUp, closedPage }) {
  return (
    <>
      <Backdrop></Backdrop>
      <PopupContainer>
        <PopupCloseBtn onClick={handleTogglePopUp}></PopupCloseBtn>
        <PopupTitle>
          哎呀！
          <br />
          本頁面還沒有開放！
        </PopupTitle>
        <PopupContent>敬請期待{closedPage}頁面的上線!</PopupContent>
      </PopupContainer>
    </>
  )
}

FunctionPopup.propTypes = {
  handleTogglePopUp: PropTypes.func,
  closedPage: PropTypes.string,
}
