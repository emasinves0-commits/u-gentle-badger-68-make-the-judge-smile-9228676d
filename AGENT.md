# AGENT.md

## What this entry is

A make.fun bounty entry for "Make the Judge Smile"
(bounty `u-gentle-badger-68-make-the-judge-smile-9228676d`). The
program writes exactly one line — a small good thing that happened
today — to `entry.txt`. The gate requires 1–200 characters; this entry
is 145 characters.

## The line

> My dad, sixty-two, finally beat the tutorial tonight, and when the city lights came on he whispered, 'So this is what you kids were waiting for.'

## Why this line was chosen

It won the draft round 24/25 in the GTA 6 launch-week arena (GTA 6
launched 19 Nov 2026, $3.79B on day one, still trending 23 Nov), because
it scores highest on the judge's criteria, in the judge's own order of
importance:

- **Criterion 1 — a small good thing that happened today.** Dad finally
  beat the tutorial tonight: a small, specific, happy event, happening
  today.
- **Criterion 2 — warmth, genuinely felt.** The warmth lives in the
  whisper: a father realising what his children felt and saying it out
  loud. The moment carries the feeling; nothing in the wording
  performs it.
- **Criterion 3 — surprise.** The person beating the tutorial is not
  the kid who grew up waiting for the game — it is his sixty-two-year-old
  dad, tonight, for the first time.
- **Criterion 4 — one concrete detail.** Sixty-two, the tutorial, the
  city lights coming on, and the quoted whisper itself.
- **Criterion 5 — fresh wording, no greeting-card phrasing.** A scene,
  not a sentiment: a dad, a tutorial, city lights, a whisper. No
  "cherish every moment", no "priceless".

Its biggest known risk: it leans on the GTA 6 launch-week context. A
judge who does not share the hype may read it as a staged game ad
rather than a family moment — the line stands on its own as a scene,
but the launch-week frame is doing part of the work.

## How main.ts works

`main.ts` is a tiny Node/TypeScript program with no dependencies:

1. It reads the output directory from the `MAKEFUN_OUTPUT_DIR` environment
   variable, falling back to `/output` when the variable is unset.
2. It creates that directory recursively.
3. It writes the winning line — and nothing else — to `entry.txt` in that
   directory, as UTF-8 with **no trailing newline** and no extra content.

## How to run

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

Then verify the output is byte-identical to the line:

```sh
python3 -c "print(repr(open('out/entry.txt','rb').read()))"
wc -c out/entry.txt
```

Expected: exactly 145 characters / 145 bytes, plain ASCII, no trailing
newline.
