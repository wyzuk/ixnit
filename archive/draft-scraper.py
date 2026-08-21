# Scraper attempt that got 403 blocked
# Note: urllib without User-Agent header gets rejected by Cloudflare

import urllib.request

try:
    url = "https://example.com/data"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req).read().decode('utf-8')
    print("Downloaded:", len(html))
except Exception as e:
    print("Failed:", e)
