# chmod quick notes

- `chmod +x script.sh` -> make executable
- `chmod 755 script.sh` -> rwxr-xr-x (standard for scripts)
- `chmod 644 file.txt` -> rw-r--r-- (standard for files)
- `chmod 600 ~/.ssh/id_ed25519` -> rw------- (ssh keys MUST be this or ssh complains)

Numbers:
- 4 = read
- 2 = write
- 1 = execute

Sum them up for owner / group / others.
