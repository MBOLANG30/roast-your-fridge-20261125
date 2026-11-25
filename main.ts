// One Line, One Laugh: Roast Your Fridge — make.fun entry
// Writes a single original roast line to /output/entry.txt.
// Deterministic: the same line on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The roast: a specific, recognisable fridge detail (the crisper drawer)
// with the twist landing in the last few words.
const LINE =
  "My fridge's crisper drawer is just a morgue where lettuce goes to be identified by its next of kin.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(LINE);
console.log(`chars: ${LINE.length}`);
