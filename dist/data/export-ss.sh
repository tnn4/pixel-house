#!/bin/bash
#author: tnn4
#license: mit/apache2.0

me=$(basename $0)

println() {
   printf "$1\n"
}

xz_tar () {
   tar -xzvf $1
}

# check if command exists example
check_command () {
    if ! command -v aseprite &> /dev/null;then
       echo "missing aseprite"
       echo "this script requires aseprite"
    fi
}


help() {
   echo "usage: $me <sprite-sheet> <scale>"
   echo "e.g.: $me monster.png 4"
   echo "if no scale given, scale=1 is used"
}

main() {
   # place stuff you want to run here
   file=$1
   scale=$2
   
   # use default scale if none is given
   if [[  -z $2 ]];then
     scale=1
   fi
   
   # ss = spritesheet
   file="${1}".aseprite
   ss="${1}"_x"${scale}"_ss.png
   ss_json="${1}"_x"${scale}"_ss.json
   
   echo "Exporting sprite sheet"
   if [[ ! -f $file ]];then
      echo "ERR! file ${file} not found"
      exit
   fi
   # run command
   aseprite -b "$file" --scale "$scale" --sheet "$ss" --data "$ss_json"
   
   # output
   echo "Exported sprite sheet to:      $ss"
   echo "Exported sprite sheet data to: $ss_json"
}

if [[ $# -eq 0 ]]; then
   help
   exit
fi

main "$@"
