import { FamButton } from 'fam-code-ui';
import { html, css } from "iares";

const template = ({ props }) => html`
  <div class="wrap-ctx">
    <h1>Hello Word, ${props?.title}!</h1>

<${FamButton}>
    <slot target="content">
      <span type="primary">
        <i>me clica</i>
      </span>
    </slot>
  </>    
  </div>
`;

export const AppHello = ({ props }) => {
  return {
    template,
    styles,
    props
  };
};

const styles = () => css`
  app-main,
  .wrap-ctx {
    display: flex;
    justify-content: center;
    align-items: center;
    color:blue;
  }
`;
