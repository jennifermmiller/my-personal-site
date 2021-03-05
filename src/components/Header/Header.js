import { arrayOf, func, object, shape, string } from 'prop-types'
import { useMediaQuery } from 'react-responsive'

import { TABLET } from '../../constants/breakpoints'
import DesktopHeader from './components/DesktopHeader'
import MobileHeader from './components/MobileHeader'

const Header = (props) => {
  const { handleThemeClick, navigation, theme } = props
  const isMobile = useMediaQuery({ query: `(max-width: ${TABLET})` })

  return (
    <>
      {isMobile ? (
        <MobileHeader handleThemeClick={handleThemeClick} navigation={navigation} theme={theme} />
      ) : (
        <DesktopHeader handleThemeClick={handleThemeClick} navigation={navigation} theme={theme} />
      )}
    </>
  )
}

Header.propTypes = {
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

export default Header
