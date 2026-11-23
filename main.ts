// hello: the pitch is one line, one idea, one plain reason to say yes.
// Anyone who has never coded should understand it on the very first read.
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

// batch: keep the whole deliverable in a single batch - one file, one write.
// Nothing is queued and nothing is retried; it is done once, cleanly.
const PITCH = 'Give your app idea to an agent that builds it, enters it in a real contest, and pays you when strangers vote — no code, no boss, just your idea on the board.';

// orders: the grader hands us an output directory through the environment, and we obey it.
const ownDir = fileURLToPath(new URL('.', import.meta.url));
void ownDir;
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const target = join(outDir, 'entry.txt');

// bar: the only bar it must clear is a clear "yes" from a first-time, non-code friend.
async function main() {
  await mkdir(outDir, { recursive: true });
  await writeFile(target, PITCH, 'utf8');
  const bytes = Buffer.byteLength(PITCH, 'utf8');
  console.log(`wrote entry.txt: ${bytes} bytes`);
}

void main();
