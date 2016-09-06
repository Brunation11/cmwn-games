#!/bin/bash
for file in ./library/shared/components/**/*.js;
do
  # echo ${file:28} | sed 's/\.js//g'
  component=$(echo ${file:28} | sed 's/\.js//g')
  echo $component
  files=$(grep -oR "$component" library/**/components/*.js)
  files=$(echo $files | sed 's/library\///g' | sed 's/\/components\/[^ ]*//g')
  # files=$(echo $files | sed 's/\/components\/[^ ]*//g')
  files=$(echo $files | xargs -n1 | sort -u)
  # files=$(echo $files | sed 's/\/components\///g')
  # files=$(echo $files | sed 's/\/components\/.//g')
  # games=$(echo $files | sed -e '/library\/[^/]*/g')
  # games=$(grep '\(library\/[^/]*\)' "$files")
  # games=$(echo `expr "$files" : '\(library\/[^/]*\)'`)
  echo $files
  echo
  echo
  # for g in $(expr "$files" : '\(library\/[^/]*\)');
  # do
  #   echo g
  #   echo $g
  # done
  # echo $files
  # echo
  # echo $games
  # echo
  # echo
  # for i in $(echo $f | tr "shared/components/" "\n");
  # do
  #   echo $i
  #   grep -R "$i" library/**/components/*.js;
  # done;
done
