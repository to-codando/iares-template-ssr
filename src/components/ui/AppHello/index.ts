import { FamButton } from 'fam-code-ui';
import { css, html } from 'iares';

const template = () => html`
    <h1>Hello Word</h1>
`;

export const AppHello = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  app-header {
    display: flex;
    justify-content: center;
    align-items: center;
    color:blue;
  }
`;
