// Make the Judge Smile — make.fun bounty entry.
//
// This tiny program writes a single one-line good thing that happened
// today to entry.txt inside the output directory the harness provides.
// It does nothing else: no network, no extra files, no extra output.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The winning line, exactly as chosen. Keep it byte-for-byte identical:
// 145 characters, no trailing newline, no extra content.
const LINE =
  "My dad, sixty-two, finally beat the tutorial tonight, and when the city lights came on he whispered, 'So this is what you kids were waiting for.'";

// The harness sets MAKEFUN_OUTPUT_DIR; fall back to /output when it is absent.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, "utf8");
