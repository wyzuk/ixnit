# Archived: First draft scraper that got blocked by Cloudflare anti-bot
# Kept here as a reminder to always set realistic User-Agent headers and handle rate limits.

import urllib.request

url = "https://example-news-site.com/articles"

try:
    # Failed because default Python urllib user-agent is 'Python-urllib/3.x' which gets 403 Forbidden immediately
    req = urllib.request.Request(url)
    with urllib.request.urlopen(req) as response:
        html = response.read().decode('utf-8')
        print("Fetched", len(html), "bytes")
except Exception as e:
    print("Scraper crashed:", e)
    # Fix: Need to use requests library or Playwright with headers:
    # headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)...'}
