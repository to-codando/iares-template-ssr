// import globalJsdom from "global-jsdom";
// import * as sinon from "sinon";
import { expect } from "@esm-bundle/chai";

import { AppHello } from "@/components/AppHello";

describe("AppHello component", () => {
  // let cleanup: { (): void };

  // before(() => {
  //   cleanup = globalJsdom();
  // });

  // after(() => {
  //   cleanup();
  // });

  // beforeEach(async () => {});

  // afterEach(async () => {});

  it("First helloApp tste test", () => {
    expect(AppHello()).to.have.all.keys(["template", "styles"]);
  });
});
