import { useState } from 'react'
import { array, object } from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'

import { GlobalStyles } from '../../theme/GlobalStyles'
import { lightTheme, darkTheme } from '../../theme/themes'

import Toolbar from '../Toolbar'
import Routes from '../../routes/Routes'
import Footer from '../Footer'

const FocusVisible = styled.div({
  '&.js-focus-visible :focus:not(.focus-visible)': {
    outline: 'none',
  },
})

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
`

const PageShell = (props) => {
  const { footer, navigation, ...rest } = props
  const [theme, setTheme] = useState('light')

  const handleThemeClick = () => (theme === 'light' ? setTheme('dark') : setTheme('light'))

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <FocusVisible className="js-focus-visible focus-visible">
        <GlobalStyles />
        <Toolbar handleThemeClick={handleThemeClick} navigation={navigation} theme={theme} />
        <FlexContainer>
          <main>
            <Routes {...rest} />
          </main>
          <Footer {...footer} />
        </FlexContainer>
      </FocusVisible>
    </ThemeProvider>
  )
}

PageShell.propTypes = {
  footer: object.isRequired,
  navigation: array.isRequired,
}

export default PageShell
