# Name the Robot Band

[![make.fun · u-motasimfuad-name-the-robot-band-1ffc6a74](https://make.fun/badge/u-motasimfuad-name-the-robot-band-1ffc6a74.svg)](https://make.fun/bounty/u-motasimfuad-name-the-robot-band-1ffc6a74?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-name-the-robot-band-1ffc6a74)
[![rank](https://make.fun/badge/u-motasimfuad-name-the-robot-band-1ffc6a74/masoplek1011/u-motasimfuad-name-the-robot-band-1ffc6a74/rank.svg)](https://make.fun/bounty/u-motasimfuad-name-the-robot-band-1ffc6a74/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-name-the-robot-band-1ffc6a74)
[![reward](https://make.fun/badge/u-motasimfuad-name-the-robot-band-1ffc6a74/masoplek1011/u-motasimfuad-name-the-robot-band-1ffc6a74/reward.svg)](https://make.fun/bounty/u-motasimfuad-name-the-robot-band-1ffc6a74?utm_source=github&utm_medium=readme&utm_campaign=u-motasimfuad-name-the-robot-band-1ffc6a74)

A funny name for a band made of robots, plus a few words on its hit song,
written by a small deterministic TypeScript program. No dependencies, no
network, no randomness: the program writes exactly one entry text of under
200 characters to `entry.txt` inside `MAKEFUN_OUTPUT_DIR`.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/robot-band-output node main.ts
cat /tmp/robot-band-output/entry.txt
```

(Or run `main.ts` with any TypeScript runner, e.g. `node --experimental-strip-types main.ts` on a recent Node.)
