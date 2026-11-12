# Entry Copy

`main.ts` is a Node 22 script that copies `summary.txt` into the directory
given by the `MAKEFUN_OUTPUT_DIR` environment variable (default `/output`) as
`entry.txt`.

It validates that `summary.txt` is between 1 and 2000 characters, prints the
byte count of the copied summary, and warns when the summary exceeds 1800 bytes.

## Usage

```bash
MAKEFUN_OUTPUT_DIR=/some/dir node main.ts
```
