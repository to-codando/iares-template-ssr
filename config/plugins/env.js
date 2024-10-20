// env.js
export default function resolveEnvironment({ environment }) {
  return {
    name: "env",
    setup(build) {
      build.onResolve({ filter: /^env$/ }, () => ({
        path: "env",
        namespace: "env-ns",
      }));

      build.onLoad({ filter: /.*/, namespace: "env-ns" }, () => ({
        contents: JSON.stringify({ environment }),
        loader: "json",
      }));
    },
  };
}
