import { func, object, string } from 'prop-types'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavItemContainer = styled.li(({ theme }) => ({
  ' > a': {
    color: theme.text,
    padding: '0 2rem',
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
        className={`${label} h5`}
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
