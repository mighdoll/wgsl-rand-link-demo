import { ModuleRegistry, WgslBundle } from "wgsl-linker";
// import randBundle from "random-wgsl";

const randBundle: WgslBundle = {
  name: "random_wgsl",
  version: "0.1.0",
  edition: "wesl_unstable_2024_1",
  modules: {
    "lib.wgsl": `
export fn ba() { }
//
`,
  },
};

const wgsl: Record<string, string> = import.meta.glob("./*.wgsl", {
  query: "?raw",
  eager: true,
  import: "default",
});

/** Link demo wgsl src
 *
 * @return linked code
 */
export function linkDemoSrc(): string {
  const registry = new ModuleRegistry({ wgsl, libs: [randBundle] });
  return registry.link("./main");
}
