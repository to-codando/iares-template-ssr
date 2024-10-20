import { FamButton } from 'fam-code-ui';
import { css, html } from 'iares';

const template = () => html`
  <slot id="content"></slot>
`;

export const AppContainer = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  app-container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width:100%;
    max-width:1180px;
    margin:0 auto;
    padding:0 1em;
  }
`;
