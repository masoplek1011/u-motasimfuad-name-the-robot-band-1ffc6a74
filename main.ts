import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Final entry text (revised in-session):
// v1 was: I'm Not a Robot — hit single "Select All Traffic Lights."
//   They passed the test and still didn't get the gig.
// v1's last sentence explained the joke, so it was cut. v2 keeps the
// name + hit song and ends on a tour announcement tied to traffic
// lights instead — shorter, no explaining, third beat lands.
const entry =
  "I'm Not a Robot — hit single \"Select All Traffic Lights.\" Now touring crosswalks near you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
