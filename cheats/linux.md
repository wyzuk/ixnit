# Linux Cheatsheet

```bash
# Processes & Ports
ps aux | grep node
kill -9 <PID>
lsof -i :3000

# Permissions
chmod +x script.sh       # make runnable
chmod 600 ~/.ssh/id_*    # secure ssh key

# Disk & Files
df -h                    # disk space
du -sh *                 # folder sizes in current dir
find . -type f -name "*.log" -delete

# Archive
tar -czf backup.tar.gz folder/
tar -xzf backup.tar.gz

# Systemctl
sudo systemctl status <service>
sudo systemctl restart <service>
journalctl -u <service> -f -n 50
```

Notes:
- `du -sh * | sort -h` shows biggest folders in current directory sorted.
