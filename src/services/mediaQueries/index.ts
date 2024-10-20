export const mediaQueries = () => {
  const xxl = (css: string): string => {
    return `@media all and (min-width: 1281px) {
      ${css}
    }`;
  };

  const xl = (css: string): string => {
    return `@media all and (min-width: 1025px) and (max-width: 1280px) {
      ${css}
    }`;
  };

  const lg = (css: string): string => {
    return `@media all and (min-width: 769px) and (max-width: 1024px) {
      ${css}
    }`;
  };

  const sm = (css: string): string => {
    return `@media all and (min-width: 641px) and (max-width: 768px) {
      ${css}
    }`;
  };

  const xs = (css: string): string => {
    return `@media all and (max-width: 640px) {
      ${css}
    }`;
  };

  return {
    xxl,
    xl,
    lg,
    sm,
    xs,
  };
};
