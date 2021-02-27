import styled from 'styled-components';
import NavItem from './components/NavItem';

const NavContainer = styled.ul(({css}) => ({
    listStyle: 'none',
    ...css
}));

const Nav = props => {
    const { css, navigation, onNavClick } = props;
    
    return (
       <nav>
            <NavContainer css={css}>
                {navigation.map((item, idx) => <NavItem key={idx} {...item} handleClick={onNavClick}/>)}
            </NavContainer>
       </nav> 
    )
}

export default Nav;