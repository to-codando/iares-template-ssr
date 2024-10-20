import { css, html } from 'iares';

const template = () => html`
  <div class="wrap-ctx">
    <h2>
      Whiter
      <span>.</span>
    </h2>  
  </div>
`;

export const AppLogo = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  app-logo {
    display: flex;
    justify-content: center;
    align-items: center;
    height:50px;
    width:100%;
    color:#000;
    font-weight:bold;
    font-size:1.5em;
  }
  .wrap-ctx {
    display: flex;
    width:100%;
  }
  .wrap-ctx span {
    color:#ff794c;
  }
`;
