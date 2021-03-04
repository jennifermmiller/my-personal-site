import { createGlobalStyle } from 'styled-components'

import { mediaQueries } from '../constants/breakpoints'

export const GlobalStyles = createGlobalStyle`
  body, html {
    height: 100%;
    width: 100%;
  }

  html {
    background-color: ${({ theme }) => theme.body};
    box-sizing: border-box;
    color: ${({ theme }) => theme.text};
    font-family: 'Inter', sans-serif;
    font-size: 11px;

    @media ${mediaQueries.tablet} {
      font-size: 14px;
    }

    @media ${mediaQueries.desktop} {
      font-size: 16px;
    }

    @media print {
      font: 9pt 'Helvetica', 'Arial', san-serif;
      background: #fff;
      color: 000;

      .header,
      footer .divider,
      .footer-links {
        display: none;
      }

      main {
        padding: 0;
        margin:  1cm;
        box-shadow: none !important;
      }
  
      h1 {
        margin-top: 0;
      }

      h1, h2, h3, h4 {
        page-break-after:avoid; 
        page-break-inside:avoid;
      }
      
      img {
        page-break-inside:avoid; 
        page-break-after:avoid;
      }

      a {
        page-break-inside:avoid
      }

      ul { 
        page-break-before:avoid;
      }

      a[href^=http]:after {
        content:" <" attr(href) "> ";
      }
    }
  }

  body {
    margin: 0
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  main {
    margin-top: 4rem;
    padding: 1rem;

    @media ${mediaQueries.tablet} {
      padding: 2rem;
    }
  }

  h3 { 
    font-weight: 500;
  }

  a {
    color: ${({ theme }) => theme.linkText};
    text-decoration: underline;
  }

  a:hover {
    background-color: ${({ theme }) => theme.linkHoverBg};
    color: ${({ theme }) => theme.linkHoverText};
    text-decoration: none;
  }

  svg {
    color: ${({ theme }) => theme.text};
  }
`
