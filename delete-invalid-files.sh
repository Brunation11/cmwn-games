#!/usr/local/bin/bash
for file in ./build/**/* ./build/**/**/* ./build/**/**/**/* ./build/**/**/**/**/*; do
  # pat=^[[:alnum:]]
  # pat=^\s$
  # pat="[^\s]"
  # pat=[^\w\/\.\-]
  pat=([^A-Za-z0-9\/\._\\\-])
  # pat=^[A-Za-z\d\/\.\-_]$
  # pat=[.\s.]
  # pat="^.*[[:space:]]+.*$"
  # pat="^.*[^A-Za-z0-9\/\._\\\-]+.*$"
  if [[ $file =~ $pat ]]; then
    echo $file
  fi
done
