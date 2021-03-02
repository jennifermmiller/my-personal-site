export const MOBILE_SM_INT = 320;
export const MOBILE_INT = 480;
export const TABLET_INT = 768;
export const DESKTOP_INT = 1024;

export const MOBILE_SM = `${MOBILE_SM_INT}px`;
export const MOBILE = `${MOBILE_INT}px`;
export const TABLET = `${TABLET_INT}px`;
export const DESKTOP = `${DESKTOP_INT}px`;

export const mediaQuery = (declaration) =>
  `@media only screen and ${declaration}`;

export const mediaQueryWithPrint = (declaration) =>
  `@media print, screen and ${declaration}`;

export const mediaQueries = {
  mobile: `(min-width: ${MOBILE})`,
  tablet: `(min-width: ${TABLET})`,
  desktop: `(min-width: ${DESKTOP})`,
};
