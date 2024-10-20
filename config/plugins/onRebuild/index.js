const protocol = process.env["PROTOCOL"];
const host = process.env["DEV_HOST"];
const port = process.env["PORT"];

const server = `${protocol}://${host}:${port}`;

export const onRebuild = () => {
  return {
    name: "on-rebuild",
    setup(build) {
      let count = 0;
      build.onEnd((result) => {
        if (count++ < 1) return;
        console.log(`Server: ${server}, build: ${Date.now()}`);
      });
    },
  };
};
