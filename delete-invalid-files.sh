#!/usr/local/bin/bash
for file in ./build/**/* ./build/**/**/* ./build/**/**/**/* ./build/**/**/**/**/*; do
  # pat=^[[:alnum:]]
  # pat=^\s$
  # pat="[^\s]"
  # pat=[^\w\/\.\-]
  # pat=[^A-Za-z\d\/\.\-_]
  # pat=^[A-Za-z\d\/\.\-_]$
  pat=[.\s.]
  if [[ $file =~ $pat ]]; then
    echo $file
  fi
done
