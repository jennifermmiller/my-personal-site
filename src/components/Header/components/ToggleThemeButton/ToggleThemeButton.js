import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const ThemeButton = styled.button({
    background: 'transparent',
    border: 'none',
    fontSize: '2rem',
    padding: '0.5rem',
    ':hover': {
      cursor: 'pointer'
    }
});

const ToggleThemeButton = props => {
    const { handleThemeClick, theme } = props;

    return (
        <ThemeButton onClick={handleThemeClick}> 
            <FontAwesomeIcon 
                icon={theme === 'light' ? faMoon : faSun }
                title={theme === 'light' ? 'Display page in Dark Mode' : 'Display page in Light Mode'}/>
        </ThemeButton>
    )
};

export default ToggleThemeButton;