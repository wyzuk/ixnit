# Linux weekend

Spent Saturday fixing permissions and setting up an old laptop with Ubuntu Server.

## What I did
- Set up SSH key auth with `ed25519` and disabled password login in `/etc/ssh/sshd_config`
- Wrote a systemd service file for a background node script
- Figured out why `systemctl daemon-reload` is necessary after editing `.service` files

## Notes
- Forgot that cron jobs don't have `$PATH` set to `/usr/local/bin`. Had to use absolute path to `node` binary (`/usr/bin/node`).
- UFW firewall: make sure to allow port 22 BEFORE enabling `ufw enable`, or you lock yourself out of SSH immediately. Almost did this.
