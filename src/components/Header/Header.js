import { useMediaQuery } from 'react-responsive';

import { MOBILE } from '../../constants/breakpoints';
import DesktopHeader from './components/DesktopHeader';
import MobileHeader from './components/MobileHeader';

const Header = props => {
    const { handleThemeClick, navigation, theme} = props;
    const isMobile = useMediaQuery({ query: `(max-width: ${MOBILE})`});

    return (
        <>
            {isMobile ? (
                <MobileHeader
                    handleThemeClick={handleThemeClick}
                    navigation={navigation}
                    theme={theme}/>
            ) : (
                <DesktopHeader
                    navigation={navigation}
                    handleThemeClick={handleThemeClick}
                    theme={theme}/>
            )}
        </>
    )
};

export default Header;