#!/usr/bin/env python3
# export-scaled-spritesheet.py v0.1

SCRIPT_NAME="export-scaled-spritesheet.py"
SCRIPT_DESCRIPTION="Scales spritesheet with aseprite CLI"
AUTHOR="tnn4"
# Version = [ Major, Minor, Tag ]
VERSION={
    "major": 0,
    "minor": 1,
    "tag": "",
} 
GENERATED_ON = "2023-10-03"
LICENSE = "MIT or Apache2.0"

# Imports
import sys
import os
import subprocess
import argparse
import shlex
from pathlib import Path
from datetime import date

# Functions
def get_today():
    today=date.today()
    print(f"today is: {today}")
#end

def init_argparse() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        prog=SCRIPT_NAME,
        description=SCRIPT_DESCRIPTION
    )

    group_getversion = parser.add_mutually_exclusive_group()
    group_getversion.add_argument('-v', '--version', action='store_true', help=f'Get version')

    return parser
#end

# Main
def main():
    print(f"{sys.argv[0]} hello world!")
    get_today()
    #parser = init_argparse()
    # args = parser.parse_args()
    args = {}
    # if args.version == True:
    #    print('v'+str(VERSION['major'])+'.'+str(VERSION['minor']))
    #    exit() 
    #fi
    if len(sys.argv) == 1:
        print(f"{sys.argv[0]} <filename> [scale]")
        exit()
    #fi
    
    target_file=sys.argv[1]
    target_file_name=os.path.splitext(target_file)[0]
    target_file_parent=Path(target_file).parent
    scale=1
    if len(sys.argv) == 3:
        scale=sys.argv[2]
    #fi
    scale=sys.argv[2]
    sheet=f"{target_file_name}_{scale}x.png"
    # aseprite -b "$file" --scale "$scale" --sheet "$ss" --data "$ss_json"
    cmd=f"aseprite -b {target_file} --scale {scale} --sheet {sheet}"
    parsed_cmd=shlex.split(cmd)
    # p = subprocess.run(["cmd", "arg1", "arg2"])
    p = subprocess.run(parsed_cmd)
#end

if __name__ == "__main__":
    sys.exit(main())
#fi

