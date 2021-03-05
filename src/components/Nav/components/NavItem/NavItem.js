import { func, object, string } from 'prop-types'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { mediaQuery, TABLET } from '../../../../constants/breakpoints'

const NavItemContainer = styled.li(({ theme }) => ({
  ' > a': {
    color: theme.text,
    fontSize: '1.5rem',
    fontWeight: '600',
    padding: '1rem 2rem',
    textDecoration: 'none',
  },
  ' > a > svg': {
    marginRight: '0.3125rem',
  },
  ' > a:hover': {
    backgroundColor: theme.navHover,
    color: theme.navHoverText,
    textDecoration: 'underline',
  },
  ' > a:hover > svg': {
    color: theme.navHoverText,
  },
  ' > .active': {
    backgroundColor: theme.activeNav,
    color: theme.activeNavText,
  },
  ' > .active > svg': {
    color: theme.activeNavText,
  },
  [mediaQuery(`(min-width: ${TABLET})`)]: {
    '> a': {
      fontSize: '1rem',
    },
  },
}))

const Label = styled.span({
  textTransform: 'capitalize',
})

const NavItem = (props) => {
  const { handleClick, icon, label, path } = props

  return (
    <NavItemContainer>
      <NavLink
        activeClassName="active"
        className={label}
        exact={true}
        onClick={handleClick}
        to={path}>
        <FontAwesomeIcon aria-hidden="true" icon={icon} title="" />
        <Label>{label}</Label>
      </NavLink>
    </NavItemContainer>
  )
}

NavItem.propTypes = {
  handleClick: func,
  icon: object,
  label: string.isRequired,
  path: string.isRequired,
}

export default NavItem
