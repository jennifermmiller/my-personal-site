import { func, string } from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const TIME = '0.1s'
const LIGHT_BACKGROUND = 'linear-gradient(90deg, #FFFF88 0%, #FDA522 100%)'
const DARK_BACKGROUND = 'linear-gradient(90deg, #8ECFFF 0%, #000026 100%)'
const setAnimation = (from, to) => keyframes({ from: from, to: to })

const ThemeButton = styled.button`
  animation: ${TIME}
    ${({ dark }) =>
      dark && setAnimation({ background: DARK_BACKGROUND }, { background: LIGHT_BACKGROUND })}
    linear;
  animation-fill-mode: forwards;
  background: ${DARK_BACKGROUND};
  border-radius: 3.125rem;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  height: 2.25rem;
  width: 4.25rem;
  display: flex;
  position: relative;
  align-self: center;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.04), 0 0 0.125rem rgba(0, 0, 0, 0.06),
    0 0 0.0625rem rgba(0, 0, 0, 0.04);
`

const StyledSwitch = styled.div`
  align-self: center;
  animation: ${TIME},
    ${({ dark }) =>
        dark &&
        setAnimation(
          {
            marginLeft: '0.1875rem',
          },
          {
            marginLeft: '1.875rem',
          }
        )}
      linear;
  animation-fill-mode: forwards;
  background: #fff;
  border-radius: 3.125rem;
  display: flex;
  justify-content: center;
  margin-left: -0.25rem;
  padding: 0.25rem;
  > svg {
    color: ${({ dark, theme }) => (dark ? theme.body : theme.text)};
  }
`

const ThemeToggleButton = (props) => {
  const { theme, toggleTheme } = props

  return (
    <ThemeButton onClick={toggleTheme} dark={theme !== 'light'}>
      <StyledSwitch dark={theme !== 'light'}>
        <FontAwesomeIcon
          className="h5"
          icon={theme === 'light' ? faMoon : faSun}
          title={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        />
      </StyledSwitch>
    </ThemeButton>
  )
}

ThemeToggleButton.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default ThemeToggleButton
