import { AppLogo, AppContainer } from "@/ui";
import { mediaQueries } from "@/services/mediaQueries";
import { css, html } from "iares";

const media = mediaQueries();

const template = () => html`
  <${AppContainer}>
    <slot target="content" ctx="app-footer">
      <div class="grid grid-cols-10">
        <div class="
          xxl-col-start-1 xxl-col-end-6
          xl-col-12 lg-row-start-1
          lg-col-12 lg-row-start-1
          sm-col-12 sm-row-start-1
          xs-col-12 xs-row-start-1          
        ">
          <div class="inline-ctx">
            <${AppLogo}/>          
          </div> 
          <span class="inline-ctx">@2023 CitruxTech, All Rights Reseved.</span>
        </div>
        <div class="
          xxl-col-start-7 xxl-col-end-13 y-align-bottom x-align-right sm-hide-ctx
          xl-col-12 lg-row-start-2
          lg-col-12 lg-row-start-2
          sm-col-12 sm-row-start-2
          xs-col-12 xs-row-start-2          
        ">
        </div>
      </div>      
    </slot>
  </>
`;

export const AppFooter = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  app-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    padding:1em 0 2em 0;
    background:#fff;
  }

  .inline-ctx {
    display:inline-block;
    padding:0;
  }

  .inline-ctx + .inline-ctx {
    padding:0 0 0 1em;
  }

  .menu-ctx {
    display: flex;
    width:100%;
    padding: 1em 0;
    align-items: flex-end;
  }

  ${media.sm(css`
    .sm-hide-ctx {
      display: none;
    }
  `)}
`;
