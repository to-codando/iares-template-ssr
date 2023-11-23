import { html, css } from "iares";

const template = () => html`
  <div class="wrap-ctx">
    <h1>Hello Word, I'm IARES!</h1>
  </div>
`;

export const AppHello = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  app-main,
  .wrap-ctx {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
