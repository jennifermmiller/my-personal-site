import { arrayOf, func, object, shape, string } from 'prop-types'
import styled from 'styled-components'

import MobileNav from '../../../MobileNav/MobileNav'
import ToggleThemeButton from '../ToggleThemeButton'

const MobileHeaderContainer = styled.header(({ theme }) => ({
  backgroundColor: theme.body,
  boxShadow: `0 2px 2px -2px ${theme.border}`,
  justifyContent: 'space-between',
  left: '0',
  position: 'fixed',
  top: '0',
  width: '100%',
  zIndex: '10',
  ' > button': {
    padding: '1rem',
    position: 'absolute',
    right: '0',
    top: '0',
  },
}))

const MobileHeader = (props) => {
  const { handleThemeClick, navigation, theme } = props

  return (
    <MobileHeaderContainer className="header">
      <MobileNav navigation={navigation} />
      <ToggleThemeButton handleThemeClick={handleThemeClick} theme={theme} />
    </MobileHeaderContainer>
  )
}

MobileHeader.propTypes = {
  handleThemeClick: func.isRequired,
  navigation: arrayOf(
    shape({
      icon: object,
      label: string.isRequired,
      path: string.isRequired,
    })
  ).isRequired,
  theme: string.isRequired,
}

export default MobileHeader
