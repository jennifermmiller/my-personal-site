import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const ThemeButton = styled.button(({ theme }) => ({
  background: 'transparent',
  border: 'none',
  fontSize: '2rem',
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
        icon={theme === 'light' ? faMoon : faSun}
        title={
          theme === 'light'
            ? 'Display page in Dark Mode'
            : 'Display page in Light Mode'
        }
      />
    </ThemeButton>
  )
}

export default ToggleThemeButton
