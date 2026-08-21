# Linux Cheatsheet

```bash
# Process & ports
ps aux | grep node
kill -9 <PID>
lsof -i :8080

# Disk & memory
df -h          # disk space
free -m        # RAM
du -sh *       # size of folders

# Archives
tar -czf archive.tar.gz folder/   # compress
tar -xzf archive.tar.gz           # extract

# Systemd
sudo systemctl status nginx
sudo systemctl restart nginx
journalctl -u nginx -f --no-pager
```
