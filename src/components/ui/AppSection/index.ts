import { AppContainer, AppText } from "@/ui";
import { mediaQueries } from "@/services/mediaQueries";
import { FamImage, FamTitle } from "fam-code-ui";
import { css, html } from "iares";
import type { HTMType } from "iares";

type Props = {
  image: string;
  title: string;
  text: string;
  reverse: boolean;
};

type Component = {
  template: () => HTMType | HTMType[];
  styles: () => string;
  props: Props;
};

type Params = {
  props: Props;
};

type ComponentFactory = {
  (params: Params): Component;
};

const media = mediaQueries();

const normalTemplate = ({ props }: Params) => html`
      <div class="grid grid-cols-12">
        <div class="
          xxl-col-6 
          xl-col-6 
          lg-col-6 
          sm-col-12 sm-row-start-2
          xs-col-12 xs-row-start-2
        ">
          <div class="section-title-area-ctx">
            <${FamTitle}>
              <slot target="content" ctx="app-section">
                <h2 class="section-title-ctx">${props.title}</h2>
              </slot>
            </>      
          </div> 
          <div class="section-text-area-ctx">
            <${AppText}>
              <slot target="content" ctx="app-section">
                <p class="section-text-ctx">${props.text}</p>
              </slot>
            </>
          </div>   
        </div>
        
        <div class="          
          xxl-col-6 
          xl-col-6 
          lg-col-6 
          sm-col-12 sm-row-start-1 
          xs-col-12 xs-row-start-1
        ">
          <div class="section-image-ctx">
            <${FamImage} 
              src="${props.image}" 
              fallbackSrc="/assets/images/404.png"
              alt="${props.title}" 
            />         
          </div>  
        </div>
      </div>
`;

const reverseTemplate = ({ props }: Params) => html`
  <div class="grid grid-cols-12">
    <div class="          
      xxl-col-6 
      xl-col-6 
      lg-col-6 
      sm-col-12 sm-row-start-1 
      xs-col-12 xs-row-start-1
    ">
      <div class="section-image-ctx">
        <${FamImage} 
          src="${props.image}" 
          fallbackSrc="/assets/images/404.png"
          alt="${props.title}" 
        />         
      </div>  
    </div>

    <div class="
      xxl-col-6 
      xl-col-6 
      lg-col-6 
      sm-col-12 sm-row-start-2
      xs-col-12 xs-row-start-2
    ">
      <div class="section-title-area-ctx">
        <${FamTitle}>
          <slot target="content" ctx="app-section">
            <h2 class="section-title-ctx">${props.title}</h2>
          </slot>
        </>      
      </div> 
      <div class="section-text-area-ctx">
        <${AppText}>
          <slot target="content" ctx="app-section">
            <p class="section-text-ctx">${props.text}</p>
          </slot>
        </>
      </div>   
    </div>
  </div>
`;

const template = ({ props }: Params) => html`
  <${AppContainer}>
    <slot target="content" ctx="app-section">
      ${props.reverse === true ? reverseTemplate({ props }) : normalTemplate({ props })}
    </slot>  
  </>
`;

export const AppSection: ComponentFactory = ({ props }) => {
  const properties = {
    reverse: false,
    ...props,
  };
  return {
    template,
    styles,
    props: properties,
  };
};

const styles = () => css`
  app-section {
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    background:#fff;
  }
  .section-image-ctx {
    display: flex;
    width:100%;
    max-width:452px;
    margin:4em auto;
  }
  .section-title-ctx {
    text-align: left !important;
  }
  .section-title-area-ctx {
    display: flex;
    width:100%;
    max-width:404px;
    margin:6em auto 0 auto;
    line-height: var(--title-line-height-secondary);
  }  
  .section-text-ctx {
    display:flex;
    width:100%;
    max-width:330px;
  }
  .section-text-area-ctx{
    display:flex;
    width:100%;
    justify-content: center;
  }

   ${media.sm(css`
    .section-image-ctx {
      margin:0 auto;
    }
    .section-title-ctx {
      padding:1em 0.8em 0.5em 0.8em !important;      
      text-align: center !important;
      font-size:2.2em !important;
    }
    .section-title-area-ctx {
      margin:0 auto 1em auto;
    }    
    .section-text-area-ctx {
      margin:0 0 4em 0;
      text-align: center !important;
    }
  `)} 

   ${media.xs(css`
    .section-image-ctx {
      margin:0 auto;
    }
    .section-title-ctx {
      padding:1em 0.8em 0.5em 0.8em !important;      
      text-align: center !important;
      font-size:2.2em !important;
    }    
    .section-title-area-ctx {
      margin:0 auto;
    }
    .section-text-area-ctx {
      margin:0 0 4em 0;
      text-align: center !important;
    }
  `)} 



`;
