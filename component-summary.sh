#!/bin/bash
for file in ./library/shared/components/**/*.js;
do
  component=$(echo ${file:28} | sed 's/\.js//g')
  echo $component
  files=$(grep -oR "$component" library/**/components/*.js)
  files=$(echo $files | sed 's/library\///g' | sed 's/\/components\/[^ ]*//g')
  files=$(echo $files | xargs -n1 | sort -u)
  echo $files
  echo
  echo
done
