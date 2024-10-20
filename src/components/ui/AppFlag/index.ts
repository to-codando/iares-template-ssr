import { mediaQueries } from '@/services/mediaQueries';
import { FamButton, FamTitle } from 'fam-code-ui';
import { css, html } from 'iares';

const media = mediaQueries();

const template = () => html`
  <div class="wrap-ctx">
    <div class="grid grid-cols-12">
      <div class="
        xxl-col-start-4 xxl-col-end-10
        xl-col-start-3 xl-col-end-11 lg-row-start-1
        lg-col-start-2 lg-col-end-12 lg-row-start-1
        sm-col-12 sm-row-start-1
        xs-col-12 xs-row-start-1    
      ">
        <${FamTitle}>
          <slot target="content" ctx="app-flag">
            <h2 class="flag-title-ctx">Save more money and stay organized with Whiter now!</h2>
          </slot>
        </>    
      </div>
      <div class="
        xxl-col-start-5 xxl-col-end-9 button-ctx
        xl-col-start-5 xl-col-end-9 lg-row-start-2
        lg-col-start-4 lg-col-end-10 lg-row-start-2
        sm-col-12 sm-row-start-2
        xs-col-12 xs-row-start-2              
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
`;

export const AppFlag = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  app-flag {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-wrap:wrap;
    padding:3em;
    background:#fff;
  }
  .wrap-ctx {
    justify-content: center;
    padding:1em 1em 4 em 1em;
    border-radius: 10px;
    background: rgb(234,174,102);
    background: linear-gradient(313deg, rgba(234,174,102,1) 0%, rgba(165,248,133,1) 19%, rgba(224,240,251,1) 35%, rgba(181,170,186,1) 47%, rgba(178,144,255,1) 60%, rgba(145,74,240,1) 70%, rgba(71,70,172,1) 81%); 
    max-width:1147px;
  }
  .flag-title-ctx {
    padding:1em 0 0 0 !important;
    line-height:1.4em;
  }
  .button-ctx {
    padding-bottom:3em;
  }

  ${media.xs(css`
    .wrap-ctx {
      padding:  0 4em;
    }
  `)}  

  ${media.sm(css`
    .wrap-ctx {
      padding:  0 4em;
    }
  `)}  
  ${media.lg(css`
    .wrap-ctx {
      padding: 0 4em;
    }
  `)}  
`;
