import src from "./main.wgsl?raw";
import bundle from "random-wgsl";


/** collect src code for demo display */
export function exampleSrc(): Record<string, string> {
  const randSrc = Object.entries(bundle.modules)[0][1];
  return { main: src, random: randSrc};
}
