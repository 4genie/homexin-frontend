import styled from 'styled-components'

export const InputLabel = styled.label``

export const InputErrorMessage = styled.p`
  color: ${(props) => props.theme.warning_100};
  margin-top: 0.5rem;
  font-size: 0.9rem;
  text-align: right;
`

export const Input = styled.input`
  display: block;
  height: 2.5rem;
  width: 100%;
  margin-top: 1.2rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme.secondary};
  border: 1px solid
    ${({ isWarning }) => {
      return isWarning
        ? (props) => props.theme.danger_100
        : (props) => props.theme.general_300
    }};
  border-radius: 0.25rem;
  outline: none;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${(props) => props.theme.general_300};
    font-weight: 100;
  }
  :-ms-input-placeholder {
    color: ${(props) => props.theme.general_300};
    font-weight: 100;
  }
  $:focus,
  &:active {
    outline: none;
    border: 1px solid #f00;
  }
`

export const Select = styled.select`
  height: 39px;
  width: 189px;
  margin-top: 1.2rem;
  padding: 0 0.5rem;
  border: 1px solid
    ${({ isWarning }) => {
      return isWarning
        ? (props) => props.theme.danger_100
        : (props) => props.theme.general_300
    }};
  border-radius: 6px;
  outline: none;
  background: #f6f6f6;
  border: 1.5px solid #cccfd3;
  box-sizing: border-box;
`
