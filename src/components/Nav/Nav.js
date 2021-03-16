import { arrayOf, func, object, shape, string } from 'prop-types'
import styled from 'styled-components'

import NavItem from './components/NavItem'

const NavContainer = styled.nav({
  display: 'flex',
  height: '100%',
  justifyContent: 'center',
})

const NavListContainer = styled.ul(({ css }) => ({
  listStyle: 'none',
  ...css,
}))

const Nav = (props) => {
  const { css, navigation, onNavClick } = props

  return (
    <NavContainer>
      <NavListContainer css={css}>
        {navigation.map((item, idx) => (
          <NavItem key={idx} {...item} handleClick={onNavClick} />
        ))}
      </NavListContainer>
    </NavContainer>
  )
}

Nav.propTypes = {
  css: object,
  navigation: arrayOf(
    shape({
      icon: object,
      label: string.isRequired,
      path: string.isRequired,
    })
  ).isRequired,
  onNavClick: func,
}

export default Nav
