import { mediaQueries } from "@/services/mediaQueries";
import { FamButton, FamImage, FamTitle } from "fam-code-ui";
import { css, html } from "iares";
import { AppContainer } from "@/ui";

const media = mediaQueries();

const template = () => html`
  <${AppContainer}>
    <slot target="content" ctx="app-banner">
      <${FamTitle}>
        <slot target="content" ctx="app-banner">
          <h1 class="title-ctx"> Manage expenses directly from Chrome.</h1>
        </slot>
      </>     
    </slot>
  </>
  <${AppContainer}>
    <slot target="content" ctx="app-banner">
      <div class="button-ctx">
        <div class="grid grid-cols-10">
          <div class="
            xxl-col-start-4 xxl-col-end-8 
            xl-col-start-4 xl-col-end-8
            lg-col-start-4 lg-col-end-8
            sm-col-start-3 sm-col-end-9
            xs-col-start-1 xs-col-end-11
            ">
            <${FamButton}>
              <slot target="content">
                <span type="primary">
                  <i>Get from Chrome Web Store</i>
                </span>
              </slot>
            </>  
          </div>
        </div>
      </div>     
    </slot>
  </>
  <${AppContainer}>
    <slot target="content" ctx="app-banner">
        <div class="grid grid-cols-12">
          <div class="
            xxl-col-12 
            xl-col-start-2 xl-col-end-12 
            lg-col-start-2 lg-col-end-12
            sm-col-start-2 sm-col-end-12
            xs-col-start-1 xs-col-end-13 
            shadow-ctx
          ">
            <${FamImage}
              class="banner-image" 
              src="/assets/images/banner.png" 
              fallbackSrc="/assets/images/404.png"
              alt="schedule" 
            />  
          </div>
        </div>      
    </slot>
  </>
    
`;

export const AppBanner = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  app-banner {
    display: flex;
    justify-content: center;
    align-items:flex-start;
    flex-direction: column;
    width:100%;
    padding:9em 0;
    background: rgb(195,224,254);
    background: linear-gradient(180deg, rgba(195,224,254,1) 0%, rgba(205,234,247,1) 35%, rgba(214,241,243,1) 60%, rgba(255,255,255,1) 100%);
  }
  .title-ctx{
    width:100%;
    margin: 0 auto;
    padding:0 !important;
    line-height:1.3em;
  }
  .button-ctx{
    display:flex;
    flex-wrap:wrap;
    width:100%;
    padding:3em;
  }
  .shadow-ctx .banner-image img {
    box-shadow: 3px 3px 180px rgb(0, 0, 0, 0.2);
  }


  ${media.lg(css`
    app-banner {
      padding: 5em 0;
    }

  `)} 

  ${media.sm(css`
    app-banner {
      padding: 8em 0 5em 0;
    }
    .sm-hide-ctx {
      display:none
    }
    .title-ctx{
      font-size:3.5em!important;
    }
  `)}  

  ${media.xs(css`
    app-banner {
      padding: 8em 0 5em 0;
    }
    .title-ctx{
      font-size:3em!important;
    }
  `)}  
`;
