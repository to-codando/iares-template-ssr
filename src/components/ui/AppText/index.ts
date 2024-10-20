import { css, html } from 'iares';

const template = () => html`
   <slot id="content"></slot>
`;

export const AppText = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  app-text {
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    font-size:1.2em;
    line-height:1.4em;
    color:#454a54;
  }
`;
