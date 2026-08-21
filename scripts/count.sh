#!/usr/bin/env bash
# Counts how many files I have in Ixnit

echo "Notes:       $(find notes -type f -name '*.md' | wc -l)"
echo "Cheats:      $(find cheats -type f -name '*.md' | wc -l)"
echo "Snippets:    $(find snippets -type f | wc -l)"
echo "Experiments: $(find experiments -type f | wc -l)"
echo "Bugs:        $(find bugs -type f -name '*.md' | wc -l)"
