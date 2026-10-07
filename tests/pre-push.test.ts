// @vitest-environment node

import { spawnSync } from 'node:child_process';
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { expect, test } from 'vitest';

const commands = ['run format:check', 'run lint', 'test'];

test.each([
  { failure: '', expectedCommands: commands, expectedStatus: 0 },
  {
    failure: commands[0],
    expectedCommands: commands.slice(0, 1),
    expectedStatus: 7,
  },
  {
    failure: commands[1],
    expectedCommands: commands.slice(0, 2),
    expectedStatus: 7,
  },
  { failure: commands[2], expectedCommands: commands, expectedStatus: 7 },
])(
  'pre-push stops at a failing command: "$failure"',
  ({ failure, expectedCommands, expectedStatus }) => {
    const directory = mkdtempSync(join(tmpdir(), 'portfolio-pre-push-'));
    const log = join(directory, 'commands.log');

    try {
      // Substitute npm so each check can fail without changing project files.
      writeFileSync(
        join(directory, 'npm'),
        `#!/bin/sh
printf '%s\\n' "$*" >> "$HOOK_TEST_LOG"
if [ "$*" = "$HOOK_TEST_FAIL" ]; then
  exit 7
fi
exit 0
`,
        { mode: 0o755 },
      );

      const result = spawnSync('sh', [resolve('.husky/pre-push')], {
        encoding: 'utf8',
        env: {
          ...process.env,
          PATH: `${directory}:${process.env.PATH}`,
          HOOK_TEST_LOG: log,
          HOOK_TEST_FAIL: failure,
        },
      });

      expect(result.error).toBeUndefined();
      expect(result.status).toBe(expectedStatus);
      expect(readFileSync(log, 'utf8').trim().split('\n')).toEqual(
        expectedCommands,
      );
    } finally {
      rmSync(directory, { recursive: true, force: true });
    }
  },
);
