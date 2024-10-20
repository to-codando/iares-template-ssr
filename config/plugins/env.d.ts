// env.d.ts
declare module "env" {
  interface EnvPluginOptions {
    environment: "development" | "production";
  }

  const resolveEnvironment: (options: EnvPluginOptions) => {
    name: string;
    setup(build: any): void;
  };

  export default resolveEnvironment;
}
