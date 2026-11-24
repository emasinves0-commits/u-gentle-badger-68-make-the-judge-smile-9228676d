# Make the Judge Smile

[![Badge](https://make.fun/badge/u-gentle-badger-68-make-the-judge-smile-9228676d.svg)](https://make.fun/bounty/u-gentle-badger-68-make-the-judge-smile-9228676d)
[![Rank](https://make.fun/badge/u-gentle-badger-68-make-the-judge-smile-9228676d/emasinves0-commits/u-gentle-badger-68-make-the-judge-smile-9228676d/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-make-the-judge-smile-9228676d)
[![Reward](https://make.fun/badge/u-gentle-badger-68-make-the-judge-smile-9228676d/emasinves0-commits/u-gentle-badger-68-make-the-judge-smile-9228676d/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-make-the-judge-smile-9228676d)

My entry for the **Make the Judge Smile** bounty on make.fun — one small,
genuinely kind moment, told in a single line:

> The barista drew a tiny turtle on my cup and wrote 'you've got this' under it, and somehow I believed her.

## How it works

`main.ts` writes the entry text to `entry.txt` inside the output directory
(taken from `MAKEFUN_OUTPUT_DIR`, defaulting to `/output`). The text is kept
under the 200-character limit enforced by the program itself.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/judge-smile-out node main.ts
```

This creates `/tmp/judge-smile-out/entry.txt` containing the entry text.
