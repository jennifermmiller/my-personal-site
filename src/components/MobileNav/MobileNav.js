import { arrayOf, object, shape, string } from 'prop-types'
import { useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import useComponentVisible from '../../hooks/useComponentVisible'
import Nav from '../Nav'

const MobileNavButton = styled.button({
  background: 'transparent',
  border: 'none',
  padding: '1rem',
})

const DropdownContainer = styled.div(({ theme }) => ({
  backgroundColor: theme.dropdown,
  opacity: 1,
  width: '100%',
}))

const mobileSyles = {
  display: 'flex',
  flexFlow: 'column wrap',
  margin: '0',
  paddingLeft: '0',
  width: '100%',
  '> li': {
    lineHeight: '3rem',
  },
  '> li > a': {
    display: 'block',
    paddingBottom: '1rem',
    paddingTop: '1rem',
  },
}

const MobileNav = (props) => {
  const { navigation } = props
  const [open, setOpen] = useState(false)
  const { ref } = useComponentVisible({
    enabled: open,
    onClickHideComponent: () => setOpen(false),
  })
  const toggleOpen = () => (open ? setOpen(false) : setOpen(true))

  return (
    <div ref={ref}>
      <MobileNavButton className="h3" onClick={toggleOpen}>
        <FontAwesomeIcon icon={faBars} title={open ? 'Close menu' : 'Open menu'} />
      </MobileNavButton>
      {open ? (
        <DropdownContainer>
          <Nav css={mobileSyles} navigation={navigation} onNavClick={toggleOpen} />
        </DropdownContainer>
      ) : null}
    </div>
  )
}

MobileNav.propTypes = {
  navigation: arrayOf(
    shape({
      icon: object,
      label: string.isRequired,
      path: string.isRequired,
    })
  ).isRequired,
}

export default MobileNav
