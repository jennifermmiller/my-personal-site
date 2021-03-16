import { func, string } from 'prop-types'
import styled, { keyframes } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const TIME = '0.1s'
const LIGHT_BACKGROUND = 'linear-gradient(90deg, #FFFF88 0%, #FDA522 100%)'
const DARK_BACKGROUND = 'linear-gradient(90deg, #8ECFFF 0%, #000026 100%)'
const setAnimation = (from, to) => keyframes({ from: from, to: to })

//TODO: Clean this up: variables, change to rem, const file of z-indexes?
const ThemeButton = styled.button`
  animation: ${TIME}
    ${({ dark }) =>
      dark && setAnimation({ background: DARK_BACKGROUND }, { background: LIGHT_BACKGROUND })}
    linear;
  animation-fill-mode: forwards;
  background: ${DARK_BACKGROUND};
  border-radius: 50px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  height: 36px;
  width: 70px;
  display: flex;
  position: relative;
  align-self: center;
  z-index: 100;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 0px 2px rgba(0, 0, 0, 0.06),
    0px 0px 1px rgba(0, 0, 0, 0.04);
`

const StyledSwitch = styled.div`
  align-self: center;
  animation: ${TIME},
    ${({ dark }) =>
        dark &&
        setAnimation(
          {
            marginLeft: '3px',
          },
          {
            marginLeft: '30px',
          }
        )}
      linear;
  animation-fill-mode: forwards;
  background: #fff;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  margin-left: -5px;
  padding: 4px;
  z-index: 10000;
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
