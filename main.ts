import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
mkdirSync(outputDir, { recursive: true });

const entry =
  "My smart fridge started judging my midnight snacks, so I unplugged it — now we're both in the dark.";

writeFileSync(join(outputDir, "entry.txt"), entry + "\n", "utf8");
