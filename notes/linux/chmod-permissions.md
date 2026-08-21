# Linux File Permissions (`chmod` & `chown`)

Mental model for Linux permissions so I stop blindly doing `chmod 777` on everything.

## Permission Structure

Running `ls -la` shows something like:
```text
-rwxr-xr-- 1 user group 4096 Aug 21 12:00 script.sh
```

Breakdown of `-rwxr-xr--`:
1. First char: `-` = file, `d` = directory, `l` = symlink.
2. Next 3 chars (`rwx`): **Owner** permissions (read, write, execute).
3. Middle 3 chars (`r-x`): **Group** permissions (read, execute, no write).
4. Last 3 chars (`r--`): **Others/World** permissions (read only).

---

## Numeric (Octal) Calculation

* `r` (read) = **4**
* `w` (write) = **2**
* `x` (execute) = **1**

Sum them up for each tier (Owner, Group, Others):

* `7` = 4 + 2 + 1 = `rwx` (Full control)
* `6` = 4 + 2 = `rw-` (Read + write, standard for text files)
* `5` = 4 + 1 = `r-x` (Read + execute, standard for scripts/binaries)
* `4` = 4 = `r--` (Read-only)
* `0` = `---` (No access)

---

## Common permission recipes

```bash
# Standard script (owner can write/run, everyone else can read/run)
chmod 755 script.sh

# Standard private key (~/.ssh/id_ed25519) - SSH will reject if too open!
chmod 600 ~/.ssh/id_ed25519
chmod 700 ~/.ssh

# Standard config file (owner read/write, others read)
chmod 644 config.json

# Quick toggle: just make a script executable
chmod +x run.sh
```

---

## Changing Ownership (`chown`)

```bash
# Change owner to alice
sudo chown alice file.txt

# Change owner and group
sudo chown alice:developers app.js

# Recursive on directory
sudo chown -R alice:alice /var/www/html
```
