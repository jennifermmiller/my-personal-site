import styled from "styled-components";
import NavItem from "./components/NavItem";

const NavContainer = styled.nav(({ theme }) => ({
  display: "flex",
  flexGrow: "2",
  justifyContent: "center",
}));

const NavListContainer = styled.ul(({ css }) => ({
  listStyle: "none",
  ...css,
}));

const Nav = (props) => {
  const { css, navigation, onNavClick } = props;

  return (
    <NavContainer>
      <NavListContainer css={css}>
        {navigation.map((item, idx) => (
          <NavItem key={idx} {...item} handleClick={onNavClick} />
        ))}
      </NavListContainer>
    </NavContainer>
  );
};

export default Nav;
