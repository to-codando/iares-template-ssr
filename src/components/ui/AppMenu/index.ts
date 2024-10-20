import { FamIcon } from "fam-code-ui";
import { createState, css, html } from "iares";

import { mediaQueries } from "@/services/mediaQueries";

const media = mediaQueries();

type AppMenuState = {
  menuIsVisible: boolean;
};

type Actions = {
  handleMenu: Function;
};

type TemplateParams = {
  state: AppMenuState;
  actions: Actions;
};

const template = ({ state, actions }: TemplateParams) => html`
  <div class="wrap-ctx">
    <div 
      class="button-ctx ${state.menuIsVisible ? "show" : "hide"}"
      onClick=${actions.handleMenu}
    >
      <${FamIcon}
        name="close"
        size="2"
      />
    </div>
    
    <div 
      class="button-ctx ${state.menuIsVisible ? "hide" : "show"}"
      onClick=${actions.handleMenu}
    >
      <${FamIcon}
        name="menu"
        size="2"
      />    
    </div>
    
    <ul 
      class="list-ctx ${state.menuIsVisible ? "show" : "hide"}"
      onClick=${actions.handleMenu}
    >
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">All Shortcuts</a>
      </li>
      <li>
        <a href="#">Suport</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>   
  </div>
`;

export const AppMenu = () => {
  const store = createState({
    menuIsVisible: false,
  });

  const handleMenu = () => {
    const { menuIsVisible } = store.state;

    store.setState({
      menuIsVisible: menuIsVisible ? false : true,
    });
  };

  return {
    template,
    styles,
    store,
    actions: {
      handleMenu,
    },
  };
};

const styles = () => css`
  app-menu,
  .wrap-ctx,
  .list-ctx,
  .list-ctx > li {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .wrap-ctx,
  .list-ctx{
    width:100%;
  }
  .list-ctx > li + li {
    margin-left:1em;
  }
  .list-ctx > li > a {
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
  }
  .button-ctx {
    display: none;
    position:absolute;
    top:50%;
    right:1em;
    transform: translateY(-50%);
    cursor: pointer;
  }

  .show {
    display:flex;
  }

  ${media.xxl(css`
    .button-ctx {display: none;}
  `)}

  ${media.xl(css`
     .button-ctx {display: none;}
  `)}

  ${media.lg(css`
     .button-ctx {display: none;}
  `)}

  ${media.sm(css`
    .list-ctx {
      flex-wrap:wrap;
      flex-direction:column;
      position: fixed;
      top:45px;
      left:0;
      right:0;
      bottom:0;
      background:#000;
      
    }
    .list-ctx > li > a {
      color: #fff;
      font-size:1.4em;
      padding:1em 0; 
    }
    .list-ctx > li {
      width:100%;
    }
    .hide {
      display: none;
    }    
  `)}

  ${media.xs(css`
    .list-ctx {
      flex-wrap:wrap;
      flex-direction:column;
      position: fixed;
      top:45px;
      left:0;
      right:0;
      bottom:0;
      background:#000;
      
    }
    .list-ctx > li > a {
      color: #fff;
      font-size:1.4em;
      padding:1em 0; 
    }
    .list-ctx > li {
      width:100%;
    }
    .hide {
      display: none;
    }    
  `)}
`;
