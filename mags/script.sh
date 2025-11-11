#!/bin/bash
# Usage: ./shiftnumbers.sh <base-folder> <start>-<end> <shift-amount>

# ==============================
# Validate args
# ==============================
if [ "$#" -ne 3 ]; then
  echo "Usage: $0 <folder> <start>-<end> <shift>"
  echo "Example: $0 myfolders 08-15 1"
  exit 1
fi

BASE_DIR="$1"
RANGE="$2"
SHIFT="$3"

# Parse start and end range (like 08-15)
START=${RANGE%-*}
END=${RANGE#*-}

# ==============================
# Validation
# ==============================
if ! [[ "$START" =~ ^[0-9]{2}$ && "$END" =~ ^[0-9]{2}$ && "$SHIFT" =~ ^-?[0-9]+$ ]]; then
  echo "Error: invalid arguments."
  echo "start/end must be two-digit numbers, shift must be integer."
  exit 1
fi

if [ ! -d "$BASE_DIR" ]; then
  echo "Error: '$BASE_DIR' is not a directory."
  exit 1
fi

# ==============================
# Core renaming logic
# ==============================
echo "Shifting folders in '$BASE_DIR' with numbers from $START to $END by $SHIFT..."
echo

# To prevent overwriting conflicts, rename in reverse order if shifting upward
if (( SHIFT > 0 )); then
  dirs=($(ls -d "$BASE_DIR"/[0-9][0-9]-* 2>/dev/null | sort -r))
else
  dirs=($(ls -d "$BASE_DIR"/[0-9][0-9]-* 2>/dev/null | sort))
fi

for dir in "${dirs[@]}"; do
  basename=$(basename "$dir")
  num=${basename%%-*}
  rest=${basename#*-}

  # Skip anything outside range
  if ((10#$num < 10#$START || 10#$num > 10#$END)); then
    continue
  fi

  # Compute new number
  new_num=$((10#$num + SHIFT))
  if (( new_num < 0 )); then
    echo "Warning: skipping $basename (resulting number < 0)"
    continue
  fi

  new_name=$(printf "%s/%02d-%s" "$BASE_DIR" "$new_num" "$rest")

  echo "Renaming: $basename → $(basename "$new_name")"
  mv "$dir" "$new_name"
done

echo
echo "✅ Done."
