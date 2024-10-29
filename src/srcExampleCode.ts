import src from "./main.wgsl?raw";

/** collect src code for demo display */
export function exampleSrc(): Record<string, string> {
  return { main: src };
}
