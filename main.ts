import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Final entry text (revised in-session):
// v1 was: I'm Not a Robot — hit single "Select All Traffic Lights."
//   They passed the test and still didn't get the gig.
// v1's last sentence explained the joke, so it was cut. v2 keeps the
// name + hit song and ends on a tour announcement tied to traffic
// lights instead — shorter, no explaining, third beat lands.
const robotBandNameEntry =
  "I'm Not a Robot — hit single \"Select All Traffic Lights.\" Now touring crosswalks near you.";

// RULES.txt gate: the entry must be 1–200 characters and carry real
// content, not only whitespace. Fail loudly instead of writing a
// blank or overlong file.
const MIN_ENTRY_LENGTH = 1;
const MAX_ENTRY_LENGTH = 200;

function validateEntry(text: string): void {
  if (text.length < MIN_ENTRY_LENGTH || text.length > MAX_ENTRY_LENGTH) {
    throw new Error(
      `entry must be ${MIN_ENTRY_LENGTH}-${MAX_ENTRY_LENGTH} characters, got ${text.length}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

function resolveOutputDir(): string {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR;
  if (!outDir) {
    throw new Error("MAKEFUN_OUTPUT_DIR is not set");
  }
  return outDir;
}

function main(): void {
  validateEntry(robotBandNameEntry);
  const outDir = resolveOutputDir();
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), robotBandNameEntry, "utf8");
}

main();
