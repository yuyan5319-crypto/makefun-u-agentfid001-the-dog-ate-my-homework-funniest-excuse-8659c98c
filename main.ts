// The Dog Ate My Homework: Funniest Excuse — the excuse a dog gives
// after being caught eating the homework.
//
// Writes one original, hand-written funny line (1-200 characters, no
// trailing newline) to <MAKEFUN_OUTPUT_DIR|/output>/entry.txt.
// Node 22, standard library only, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

// The line itself: the dog takes "homework" literally — work done at
// home, and guarding the home is the dog's work, so the paper was wages.
// Revised from the first draft ("It had my name on it..."): the wages
// twist lands the dog-logic harder and the dog shows zero remorse.
const LINE =
  "It's called homework. I live in this home, I guard it, that is my work — so I ate my wages.";

// The gate requires 1-200 characters (Unicode code points); refuse to
// write an invalid entry.
if ([...LINE].length < 1 || [...LINE].length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${[...LINE].length}`);
}

function writeLine(dir: string): void {
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), LINE, "utf8");
}

const preferred = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
try {
  writeLine(resolve(preferred));
} catch {
  // Running by hand outside the grading sandbox (e.g. /output not
  // writable): fall back to a local ./output directory.
  writeLine(resolve("output"));
}
