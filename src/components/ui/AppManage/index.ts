import { AppText } from "@/ui";
import { FamImage, FamTitle } from "fam-code-ui";
import { css, html } from "iares";
import { AppContainer } from "../AppContainer";

const template = () => html`
  <${AppContainer}>
    <slot target="content" ctx="app-report">
      <div class="grid grid-cols-12">
        <div class="
          xxl-col-6
          xl-col-12 lg-row-start-1
          lg-col-12 lg-row-start-1
          sm-col-12 sm-row-start-1
          xs-col-12 xs-row-start-1          
        ">
          <div class="report-image-ctx">
            <${FamImage} 
              src="/assets/images/manage.png" 
              fallbackSrc="/assets/images/404.png"
              alt="report" 
            />         
          </div>
        </div>      
        <div class="
          xxl-col-6
          xl-col-12 lg-row-start-2 
          lg-col-12 lg-row-start-2
          sm-col-12 sm-row-start-2 
          xs-col-12 xs-row-start-2        
        ">
          <div class="report-title-area-ctx">
            <${FamTitle}>
              <slot target="content" ctx="app-report">
                <h2 class="report-title-ctx"> Quickly manage everythis to save extra money.</h2>
              </slot>
            </>      
          </div> 
          <div class="report-text-area-ctx">
            <${AppText}>
              <slot target="content" ctx="app-report">
                <p class="report-text-ctx">Make things faster. Pin tabs to automatically open websites you use the most.</p>
              </slot>
            </>
          </div>   
        </div>
      </div>    
    </slot>  
  </> 
  <${AppContainer}>
    <slot target="content" ctx="app-report">
      <div class="grid grid-cols-12">
        <div class="
          xxl-col-6
          xl-col-12 lg-row-start-2
          lg-col-12 lg-row-start-2
          sm-col-12 sm-row-start-2
          xs-col-12 xs-row-start-2        
        ">
          <div class="report-title-area-ctx">
            <${FamTitle}>
              <slot target="content" ctx="app-report">
                <h2 class="report-title-ctx"> Never miss your rent paying by managing own calendar</h2>
              </slot>
            </>      
          </div> 
          <div class="report-text-area-ctx">
            <${AppText}>
              <slot target="content" ctx="app-report">
                <p class="report-text-ctx">Make things faster. Pin tabs to automatically open websites you use the most.</p>
              </slot>
            </>
          </div>   
        </div>
        <div class="
          xxl-col-6
          xl-col-12 lg-row-start-1 
          lg-col-12 lg-row-start-1
          sm-col-12 sm-row-start-1 
          xs-col-12 xs-row-start-1        
        ">
          <div class="report-image-ctx">
            <${FamImage} 
              src="/assets/images/manage1.png" 
              fallbackSrc="/assets/images/404.png"
              alt="report" 
            />         
          </div>  
        </div>         
      </div>    
    </slot>  
  </>    
`;

export const AppManage = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  app-manage {
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    flex-direction:column;
    background:#fff;
  }
`;
