#!/bin/bash
for f in ./library/shared/components/**/*.js;
do
  echo ${f:28}};
  # for i in $(echo $f | tr "shared/components/" "\n");
  # do
  #   echo $i
  #   grep -R "$i" library/**/components/*.js;
  # done;
done
