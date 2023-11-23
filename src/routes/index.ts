import { html, render } from "iares";
import { TRoute } from "iares";

import { AppDefault } from "@/components/AppDefault";
import { AppHello } from "@/components/AppHello";

export const routes: TRoute[] = [
  {
    regex: /^\/404$/,
    default: "#/404",
    mount: ({ context }) => {
      render(html`<${AppDefault} />`, context);
    },
  },
  {
    regex: /^#\/$|^#\/home$/,
    start: "#/",
    mount: ({ context }) => {
      render(html`<${AppHello} />`, context);
    },
  },
];
