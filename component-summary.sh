#!/bin/bash
for file in ./library/shared/components/**/*.js;
do
  component=$(echo ${file:28} | sed 's/\.js//g')
  components=$components$'\n'$component
  files=$(grep -oR "$component" library/**/components/*.js)
  files=$(echo $files | sed 's/library\///g' | sed 's/\/components\/[^ ]*//g')
  files=$(echo $files | xargs -n1 | sort -u)
  for game in $files;
  do
    games[$game]="${games[$game]} $component"
    # echo games[$game]
    # echo ${games[$game]}
  done
  components=$components$'\n'$files$'\n\n'
done
echo "$components"
echo $games
for game in ./library/**/index.js;
do
  game=$(echo $game | sed 's/\.\/library\///g' | sed 's/\/index\.js//g')
  if [[ $game != 'game' ]]; then
    echo $game
    echo ${games[$game]}
  fi
done

# for game in ./library/**/index.js;
# do
#   game=$(echo $game | sed 's/\.\/library\///g' | sed 's/\/index\.js//g')
#   # echo $game

#   # files=$(grep -hR "shared/components" library/$game/components/*.js)
#   # files=$(echo $files | sed 's/import[^/]*//g' | sed 's/\/components\///g')
#   # files=$(echo $files | xargs -n1 | sort -u)
#   # components=$components$'\n'$files$'\n\n'
# done
# # echo "$components"
