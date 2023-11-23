import { html, css } from "iares";

const template = () => html`
  <div class="wrap-ctx">
    <router-view></router-view>
  </div>
`;

export const AppMain = () => {
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
    flex-wrap:wrap;
    width:100vw;
    height: 100vh
  }
`;
