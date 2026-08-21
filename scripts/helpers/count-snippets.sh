#!/usr/bin/env bash
# ==============================================================================
# count-snippets.sh
# Generates a quick count of notes, snippets, exercises, and experiments.
# ==============================================================================

echo "📊 Ixnit Knowledge Base Statistics:"
echo "-----------------------------------"

notes_count=$(find notes -type f -name "*.md" 2>/dev/null | wc -l)
snippets_count=$(find snippets -type f 2>/dev/null | wc -l)
exercises_count=$(find exercises -type f -name "*.js" 2>/dev/null | wc -l)
experiments_count=$(find experiments -type f 2>/dev/null | wc -l)
logs_count=$(find logs -type f -name "*.md" 2>/dev/null | wc -l)

echo "📝 Notes:       $notes_count"
echo "✂️  Snippets:    $snippets_count"
echo "🏋️ Exercises:   $exercises_count"
echo "🔬 Experiments: $experiments_count"
echo "📅 Logs:        $logs_count"
echo "-----------------------------------"
echo "Keep learning and building!"
