#!/bin/bash

FileToConvert=${1:?Error, no specified file to convert}
OutputDir=${2:-/tmp}
Prefix=${3}
Width=210

svg2gcode -F -B -w ${Width} ${FileToConvert} ${OutputDir}/${Prefix}$(basename ${FileToConvert}).gcode
