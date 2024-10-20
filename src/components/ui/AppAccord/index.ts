import { mediaQueries } from "@/services/mediaQueries";
import { FamAvatar, FamButton, FamCard, FamIcon, FamTitle } from "fam-code-ui";
import { css, html } from "iares";
import { AppContainer } from "@/ui";
import { AppText } from "@/ui";

const media = mediaQueries();

const template = () => html`
  <${AppContainer}>
    <slot target="content" ctx="app-accord">
     <div class="wrap-ctx">
      <div class="grid grid-cols-12">
        <div class="
          xxl-col-12
          xl-col-12 
          lg-col-12   
          sm-col-12 
          xs-col-12        
        ">
          <${FamTitle}>
            <slot target="content">
              <h2 class="accord-title-ctx">Choose according to your needs</h2>
            </slot>
          </>
        </div>   
        <div class="
          xxl-col-6
          xl-col-6 
          lg-col-6 
          sm-col-12
          xs-col-12          
        ">
          <${FamCard}>
            <slot target="content" ctx="app-accord">
              <div>
                <div class="avatar-ctx">
                  <${FamAvatar} 
                    src="/assets/images/icon1.png" 
                    fallbackSrc="/assets/images/avatar-white.png"
                    size="6"
                    alt="avatar" 
                  />                 
                </div>
                <div class="title-ctx">
                  <${FamTitle}>
                    <slot target="content">
                      <h3 class="sub-title-ctx">For Person</h3>
                    </slot>
                  </>
                </div>                
                <${AppText}>
                  <slot target="content" ctx="app-accord">
                    <p class="accord-text-ctx">A team is a group of individuals working together to achieve their goal. As defined by Professor Leigh</p>
                  </slot>
                </>
                <div class="button-ctx">
                  <${FamButton}>
                    <slot target="content">
                      <span type="secondary">
                        <i>Learn More</i>
                      </span>
                    </slot>
                  </>                  
                </div>                                            
              </div>           
            </slot>
          </>
        </div>
        <div class="
          xxl-col-6
          xl-col-6 
          lg-col-6 
          sm-col-12
          xs-col-12        
        ">
          <${FamCard}>
            <slot target="content" ctx="app-accord">
              <div>
                <div class="avatar-ctx">
                  <${FamAvatar} 
                    src="/assets/images/avatar.png" 
                    fallbackSrc="/assets/images/avatar-white.png"
                    size="6"
                    alt="avatar" 
                  />                
                </div>
                <div class="title-ctx">
                  <${FamTitle}>
                    <slot target="content">
                      <h3 class="sub-title-ctx">For Tean</h3>
                    </slot>
                  </>
                </div>                
                <${AppText}>
                  <slot target="content" ctx="app-accord">
                    <p class="accord-text-ctx">A team is a group of individuals working together to achieve their goal. As defined by Professor Leigh</p>
                  </slot>
                </>                
                <div class="button-ctx">
                  <${FamButton}>
                    <slot target="content">
                      <span type="secondary">
                        <i>Learn More</i>
                      </span>
                    </slot>
                  </>                  
                </div>                                            
              </div>           
            </slot>
          </>
        </div>
      </div>      
     </div>     
    </slot>   
  </>
`;

export const AppAccord = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  app-accord {
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    flex-wrap:wrap;
    background:#fff;
    border:#c6c6c8;
  }
  .wrap-ctx {
    display: flex;
    width:100%;
    max-width:780px;
    margin:0 auto;
    padding:3em 0;
  }
  .cards {
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
  }
  .button-ctx {
    padding:2em;
  }
  .avatar-ctx{
    padding-top:2em;
  }
  .accord-text-ctx {
    text-align: center;
    line-height:1.6em;
  }

   ${media.xs(css`
    app-accord {
      padding:1em 0.8em 0.5em 0.8em;
    }
    .wrap-ctx {
      padding:0;
    }
  `)} 
`;
