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
    fontSize: 87.5%;

    @media ${mediaQueries.tablet} {
      font-size: 100%;
    }

    @media ${mediaQueries.desktop} {
      font-size: 112.5%;
    }

    @media print {
      font: 8pt 'Helvetica', 'Arial', san-serif;
      background: #fff;
      color: #000;

      .header,
      footer .divider,
      .footer-links {
        display: none;
      }

      main {
        padding: 0;
        margin:  2cm;
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
    }
  }

  body {
    margin: 0;
    color: ${({ theme }) => theme.text};
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    line-height: 1.75;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  #root {
    backdrop-filter: blur(5px);
  }

  p {margin-bottom: 1rem;}

  h1, h2, h3, h4, h5 {
    margin: 1.38rem 0;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    line-height: 1.3;
  }

  h1, .h1 {
    margin-top: 0;
    font-size: 3.052rem;
  }

  h2, .h2 {
    font-size: 2.441rem;
  }

  h3, .h3 {
    font-size: 1.953rem;
  }

  h4, .h4 {
    font-size: 1.563rem;
  }

  h5, .h5 {
    font-size: 1.25rem;
  }

  .text-small {
    font-size: 0.8rem;
  }

  .text-xxl {
    font-size: 4.768rem;
  }

  main {
    padding: 4rem 2rem;
    box-shadow: ${({ theme }) => `0 2px 2px -2px ${theme.border}`};
    flex-grow: 1;
    min-height: calc(100vh - 10rem);
  }

  h3 { 
    margin: 1rem 0 0;
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
`
