import { func, string } from 'prop-types'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const ThemeButton = styled.button(({ theme }) => ({
  background: 'transparent',
  border: 'none',
  padding: '0.5rem',
  ':hover': {
    backgroundColor: theme.themeButtonHover,
    color: theme.themeButtonHoverText,
    cursor: 'pointer',
  },
  ':hover > svg': {
    color: theme.themeButtonHoverText,
  },
}))

const ToggleThemeButton = (props) => {
  const { handleThemeClick, theme } = props

  return (
    <ThemeButton onClick={handleThemeClick}>
      <FontAwesomeIcon
        className="h3"
        icon={theme === 'light' ? faMoon : faSun}
        title={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      />
    </ThemeButton>
  )
}

ToggleThemeButton.propTypes = {
  handleThemeClick: func.isRequired,
  theme: string.isRequired,
}

export default ToggleThemeButton
