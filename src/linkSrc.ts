import randBundle from "random-wgsl";
import { ModuleRegistry } from "wgsl-linker";

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
