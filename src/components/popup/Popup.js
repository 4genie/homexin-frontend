import styled from 'styled-components'

const PopUp = styled.div`
  z-index: 100;
  width: 87%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${(props) => props.theme.general_300};
  border-radius: 15px;
  box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.25);
  transition: all 0.5s ease-out;
`

export default PopUp
