import { bool, func } from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const ToggleButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  padding: 1rem;
`

const DrawerToggleButton = (props) => {
  const { isOpen, toggleDrawer } = props

  return (
    <ToggleButton onClick={toggleDrawer} className="h3">
      <FontAwesomeIcon icon={faBars} title={isOpen ? 'Close menu' : 'Open menu'} />
    </ToggleButton>
  )
}

DrawerToggleButton.propTypes = {
  isOpen: bool,
  toggleDrawer: func,
}

export default DrawerToggleButton
