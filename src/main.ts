import { createApp, html, render, router } from "iares";
import { environment } from "env";

import { routes } from "./routes";
import { AppMain } from "@/components/AppMain";

export const appHost = createApp({
	onMount(context, props) {
		render(html`<${AppMain} />`);
		router({ routes, context }).init();
	},
});

if (environment === "development") {
	new EventSource("esbuild").addEventListener("change", () => {
		window.location.reload();
	});
}
