import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A robot's pickup line: a million simulations, one leap of faith.
const LINE =
  "I ran a million simulations of asking you out. Every one ended with you saying yes. This is the run where I finally believe them.";

const MAX = 200;
if (LINE.length < 1 || LINE.length > MAX) {
  throw new Error(`entry must be 1-${MAX} characters, got ${LINE.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
