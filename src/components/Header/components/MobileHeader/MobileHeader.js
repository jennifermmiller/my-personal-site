import styled from 'styled-components';

import MobileNav from '../../../MobileNav/MobileNav';
import ToggleThemeButton from '../ToggleThemeButton';

const MobileHeaderContainer = styled.header(({ theme }) => ({
    backgroundColor: theme.body,
    justifyContent: 'space-between',
    left: '0',
    position: 'fixed',
    top: '0',
    width: '100%',
    ' > button': {
        position: 'absolute',
        padding: '1rem',
        right: '0.5rem',
        top: '0.5rem'
    }
}));

const MobileHeader = props => {
    const { handleThemeClick, navigation, theme } = props;

    return (
        <MobileHeaderContainer>
            <MobileNav navigation={navigation}/>
            <ToggleThemeButton handleThemeClick={handleThemeClick} theme={theme}/>
        </MobileHeaderContainer>
    )
};

export default MobileHeader;