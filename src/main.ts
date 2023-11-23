import { createApp, html, render, router } from "iares";
import PageLayout from './Layouts/Page';
import { AppHome } from "@/components/AppHome";

export const appHost = createApp({
  onMount(context, props) {
    PageLayout(AppHome, { title: 'Outro' })
  },
});

// if (environment === "development") {
//   new EventSource("esbuild").addEventListener("change", () => {
//     window.location.reload();
//   });
// }


 