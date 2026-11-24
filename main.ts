import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_LENGTH = 200;

const ENTRY_TEXT =
  "The barista drew a tiny turtle on my cup and wrote 'you've got this' under it, and somehow I believed her.";

if (ENTRY_TEXT.length > MAX_LENGTH) {
  throw new Error(
    `Entry text is ${ENTRY_TEXT.length} characters, exceeding the maximum of ${MAX_LENGTH}.`,
  );
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY_TEXT, "utf8");
