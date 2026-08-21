#!/usr/bin/env bash
# Removes .log files and temp junk

echo "Cleaning .log files..."
find . -type f -name "*.log" -delete
echo "Done."
