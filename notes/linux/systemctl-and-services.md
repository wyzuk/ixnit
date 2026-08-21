# systemctl & Systemd Services

Quick reference for managing background daemons and writing custom services on Linux servers.

## Everyday `systemctl` commands

```bash
# Check status
systemctl status nginx

# Start / Stop / Restart
sudo systemctl start nginx
sudo systemctl stop nginx
sudo systemctl restart nginx

# Reload config without dropping active connections
sudo systemctl reload nginx

# Enable service to start automatically on boot
sudo systemctl enable nginx

# Disable auto-start on boot
sudo systemctl disable nginx
```

---

## Reading service logs with `journalctl`

```bash
# View live trailing logs for a specific service
journalctl -u my-app.service -f

# View logs from today only
journalctl -u my-app.service --since today

# View last 50 lines
journalctl -u my-app.service -n 50 --no-pager
```

---

## Example: Custom Node.js Systemd Service Unit

Location: `/etc/systemd/system/my-node-app.service`

```ini
[Unit]
Description=My Node App
After=network.target

[Service]
Type=simple
User=ubuntu
WorkingDirectory=/home/ubuntu/apps/my-node-app
ExecStart=/usr/bin/node /home/ubuntu/apps/my-node-app/server.js
Restart=always
RestartSec=5
Environment=NODE_ENV=production
Environment=PORT=3000

[Install]
WantedBy=multi-user.target
```

After editing:
```bash
sudo systemctl daemon-reload
sudo systemctl enable my-node-app
sudo systemctl start my-node-app
```
