import styled from 'styled-components';

import Nav from '../../../Nav';
import ToggleThemeButton from '../ToggleThemeButton';

const DesktopHeaderContainer = styled.header(({ theme }) => ({
    alignItems: 'center',
    backgroundColor: theme.body,
    display: 'flex',
    height: '3.25rem',
    justifyContent: 'space-between',
    left: '0',
    position: 'fixed',
    opacity: '0.9',
    top: '0',
    width: '100%',
    zIndex: '500'
}));

const navStyles = {
    display: 'flex',
    paddingLeft: '0'
}

const DesktopHeader = props => {
    const { 
        handleThemeClick, 
        navigation, 
        theme
    } = props;

    return (
        <DesktopHeaderContainer className="header">
            <Nav css={navStyles} navigation={navigation}/>
            <ToggleThemeButton handleThemeClick={handleThemeClick} theme={theme}/> 
        </DesktopHeaderContainer>  
    );
};

export default DesktopHeader;
