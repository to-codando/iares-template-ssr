import { html, css } from "iares";
import { AppHello } from "@/components/AppHello";

const template = ({ props }) => html`
  <${AppHello} title="${props.title}" />
`;

export const AppHome = ({ props }) => {
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
  }
`;
