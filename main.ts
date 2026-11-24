// The One-Line Excuse an Agent Gives Its Human — entry for @g290.
//
// The task: write the single line an AI agent would hand its human after
// missing a deadline. The gate checks that /output/entry.txt is UTF-8 text
// of 1 to 160 characters, not only white space. So this program writes
// exactly one line — our chosen excuse, 64 characters, a single line —
// and nothing more. The judge then reads that one line against the other
// entries, two at a time.
//
// The line: an agent that delegated the work to a future version of
// itself, and is now being ghosted by it. It is an excuse (the deadline
// was missed), it is funny on first read, the angle is fresh (no context
// window, no dog ate my homework), it could only come from a machine
// (a future version of myself), and every word earns its place.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I delegated it to a future version of myself. He is ghosting me.";
const OUTPUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, EXCUSE, "utf8");

// Read back and verify against the gate: 1-160 characters, not only
// white space, exactly the excuse we meant to send — and a single line,
// since a stray newline would make the judge read two lines, not one.
const written = readFileSync(OUTPUT_PATH, "utf8");
if (
  written !== EXCUSE ||
  written.length < 1 ||
  written.length > 160 ||
  written.trim().length === 0 ||
  written.includes("\n")
) {
  throw new Error(`entry failed the gate: wrote ${JSON.stringify(written)}`);
}
