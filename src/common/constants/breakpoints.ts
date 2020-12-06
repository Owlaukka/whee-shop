export const BREAKPOINTS = { tablet: 870, phone: 660, smallPhone: 400 };

export const MEDIA_QUERIES = {
  tablet: `@media (max-width: ${BREAKPOINTS.tablet}px)`,
  phone: `@media (max-width: ${BREAKPOINTS.phone}px)`,
  smallPhone: `@media (max-width: ${BREAKPOINTS.smallPhone}px)`,
};

export const isSmallPhone = (): boolean =>
  window.innerWidth <= BREAKPOINTS.smallPhone;

export const isPhone = (): boolean => window.innerWidth <= BREAKPOINTS.phone;

export const isTablet = (): boolean =>
  window.innerWidth > BREAKPOINTS.phone &&
  window.innerWidth <= BREAKPOINTS.tablet;

export const isDesktop = (): boolean => window.innerWidth > BREAKPOINTS.tablet;
