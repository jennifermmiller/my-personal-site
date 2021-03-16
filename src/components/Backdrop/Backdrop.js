import { func } from 'prop-types'
import styled from 'styled-components'

const StyledBackdrop = styled.div`
  background: rgba(0, 0, 0, 0.65);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 100;
`

const Backdrop = (props) => {
  const { handleBackdropClick } = props

  return <StyledBackdrop onClick={handleBackdropClick} />
}

Backdrop.propTypes = {
  handleBackdropClick: func,
}

export default Backdrop
