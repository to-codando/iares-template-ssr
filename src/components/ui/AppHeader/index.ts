import { AppContainer, AppLogo, AppMenu } from "@/ui";
import { mediaQueries } from "@/services/mediaQueries";
import { FamButton } from "fam-code-ui";
import { css, html } from "iares";

const media = mediaQueries();

const template = () => html`
  <div class="wrap-ctx">
    <${AppContainer}>
      <slot target="content" ctx="app-header">
        <div class="grid grid-cols-12">
          <div class="xxl-col-2 xl-col-2 lg-col-2 sm-col-3 xs-col-5">
            <${AppLogo}/>
          </div>
          <div class="xxl-col-8 xl-col-8 lg-col-8 sm-col-9 xs-col-8">
            <div class="wrap-menu-ctx">
              <${AppMenu}/>
            </div>
          </div>
          <div class="xxl-col-2 xl-col-2 lg-col-2 sm-hide-ctx">
            <${FamButton}>
              <slot target="content">
                <span type="primary-hole">
                  <i>Get Whiter</i>
                </span>
              </slot>
            </>        
          </div>
        </div>
      </slot>
    </>
  </div>  
`;

export const AppHeader = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  app-header,
  .wrap-ctx {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width:100%;
    background:#c3e0fe;
    padding:1em 0;
  }
  .wrap-menu-ctx {
    display: flex;
    align-items: center;
    justify-content: center;
    height:50px;
  }
  ${media.sm(css`
    app-header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      border-bottom:2px #b2cce3 solid;
    }
    app-header, 
    .wrap-ctx {
      padding:0;
    }

    .sm-hide-ctx {
      display:none
    }
  `)}

  ${media.xs(css`
    app-header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      border-bottom:2px #b2cce3 solid;
    }
    app-header, 
    .wrap-ctx {
      padding:0;
      border-bottom:2px #b2cce3 solid;
    }

    .sm-hide-ctx {
      display:none
    }
  `)}
`;
