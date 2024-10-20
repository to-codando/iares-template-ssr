import { AppHome } from "@/pages";
import { createApp, html, render, router } from "iares";
import { MainPageLayout } from "@/layouts";

export const appHost = createApp({
  onMount(context, props) {
    MainPageLayout(AppHome, { title: "Outro" });
  },
});

// if (environment === "development") {
//   new EventSource("esbuild").addEventListener("change", () => {
//     window.location.reload();
//   });
// }
