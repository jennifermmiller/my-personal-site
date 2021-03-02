import { NavLink } from "react-router-dom"; 
import styled from 'styled-components';

import { mediaQuery,  DESKTOP } from '../../../../constants/breakpoints';

const NavItemContainer = styled.li(({theme}) => ({
    '> .active': {
        background: theme.activeNav,
        color: theme.activeNavText
    },
    '> a': {
        borderRadius: '0.25rem',
        fontSize: '1.5rem',
        fontWeight: '600',
        padding: '1rem 2rem'
    },
    [mediaQuery(`(min-width: ${DESKTOP})`)]: {
        '> a': {
            fontSize: '1rem'
        }
    }

}));

const NavItem = props => {
    const { handleClick, label, path } = props;
    
    return (
       <NavItemContainer>
            <NavLink 
                activeClassName='active'
                exact={true}
                onClick={handleClick}
                to={path}>
                    {label}
            </NavLink>
        </NavItemContainer>
    );
};

export default NavItem;
