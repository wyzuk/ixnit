# cron reminders

Edit user cron:
```bash
crontab -e
```

Format:
```text
* * * * * command to execute
| | | | |
| | | | └── Day of week (0 - 6) (0 = Sunday)
| | | └──── Month (1 - 12)
| | └────── Day of month (1 - 31)
| └──────── Hour (0 - 23)
└────────── Minute (0 - 59)
```

Examples:
- `0 0 * * *` -> midnight every day
- `*/15 * * * *` -> every 15 minutes
- `0 9 * * 1` -> 9 AM every Monday

Always use absolute paths in cron jobs (e.g. `/usr/bin/node /home/user/script.js`). Cron doesn't have your normal `$PATH`.
