import styled from 'styled-components'

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 50;
  left: 0;
  top: 0;
  background-color: rgba(196, 196, 196, 0.5);
  backdrop-filter: blur(4px);
`

export default Backdrop
