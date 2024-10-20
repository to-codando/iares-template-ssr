import {
  AppAccord,
  AppBanner,
  AppFlag,
  AppFooter,
  AppHeader,
  AppManage,
  AppSection,
} from "@/ui";
import { css, html } from "iares";

const template = () => html`
  <${AppHeader}/>
  <${AppBanner}/>
  <${AppSection}
    image="/assets/images/report.png"
    title="Get every report in a single place while your browsing"
    text="Make things faster. Pin tabes to automatically open websites you the most."  
    reverse=${false}
  />
  <${AppSection}
    image="/assets/images/manage.png"
    title="Quickly manage everythis to save extra money."
    text="Make things faster. Pin tabes to automatically open websites you the most."  
    reverse=${true}
  />
  <${AppSection}
    image="/assets/images/manage1.png"
    title="Never miss your rent paying by managing own calendar"
    text="Make things faster. Pin tabes to automatically open websites you the most."  
    reverse=${false}
  />
  <${AppAccord}/>
  <${AppFlag}/>
  <${AppFooter}/>
`;

export const AppHome = () => {
  return {
    template,
    styles,
  };
};

const styles = () => css`
  app-home {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction:column;
    width:100%;
}
`;
