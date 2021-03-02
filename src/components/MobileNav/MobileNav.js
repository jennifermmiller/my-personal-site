import { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Nav from '../Nav';
import useComponentVisible from '../../hooks/useComponentVisible';

const MobileNavContainer = styled.div({
    
});

const MobileNavButton = styled.button({
    background: 'transparent',
    border: 'none',
    fontSize: '2rem',
    padding: '1rem'
});

//TODO: Clean this div up, display is slightly off
const DropdownContainer = styled.div(({ theme }) => ({
    backgroundColor: theme.dropdown,
    opacity: 1,
    width: '100%'
}));

const mobileSyles = {
    display: 'flex',
    flexFlow: 'column wrap',
    paddingLeft: '0',
    '> li': {
        lineHeight: '4rem'
    },
    '> li > a': {
        borderRadius: '0',
        display: 'block',
        height: '100%',
        width: '100%'  
    }
};

//TODO: darken page when dropdown is open?
const MobileNav = props => {
    const { navigation } = props;
    const [open, setOpen] = useState(false);
    const { ref } = useComponentVisible({
        enabled: open,
        onClickHideComponent: () => setOpen(false)
    });
    const toggleOpen = () => open ? setOpen(false) : setOpen(true);

    return (
        <MobileNavContainer ref={ref}>
            <MobileNavButton onClick={toggleOpen}>
                <FontAwesomeIcon icon={faBars} title={open ? 'Close menu' : 'Open menu'}/>
            </MobileNavButton>
            {open && 
                <DropdownContainer>
                    <Nav navigation={navigation} onNavClick={toggleOpen} css={mobileSyles}/>
                </DropdownContainer>}
       </MobileNavContainer>
    )
}

export default MobileNav;