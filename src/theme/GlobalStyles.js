import { createGlobalStyle } from 'styled-components'
import { mediaQueries } from '../constants/breakpoints'

//TODO: light/dark theme
// TODO: font family, links, buttons, nav
export const GlobalStyles = createGlobalStyle`
  html {
    background-color: ${({ theme }) => theme.body};
    box-sizing: border-box;
    color: ${({ theme }) => theme.text};
    font-family: 'Inter', sans-serif;
    font-size: 11px;
    height: 100vh;

    @media ${mediaQueries.tablet} {
      font-size: 14px;
    }

    @media ${mediaQueries.desktop} {
      font-size: 16px;
    }
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  main {
    margin-top: 4rem;
    padding: 1rem;

    @media ${mediaQueries.tablet} {
      padding: 3rem;
    }
  }

  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none; 
  }

  a:hover {
    text-decoration: underline;
  }

  svg {
    color: ${({ theme }) => theme.text};
  }
`
