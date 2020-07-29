#!/bin/bash

# Convert.sh ImageToConvert OutputDir Prefix
# GoToPrint.sh OutputDir Prefix

FolderToSave=${1:-/tmp/TakePhoto}
Prefix=${2:-capture-}

# On clean le répertoire de sortie
rm -r ${FolderToSave}
mkdir -p ${FolderToSave}

# On prend 4 photos
for PhotoNumber in {1..4} ; do
  touch ${FolderToSave}/${Prefix}${PhotoNumber}.png
  #ffmpeg \
  #  -y \
  #  -f v4l2 \
  #  -input_format mjpeg \
  #  -video_size 1920x1080 \
  #  -i /dev/video0 \
    raspistill -o "${FolderToSave}/${Prefix}${PhotoNumber}.png"
done

LD_PRELOAD=/usr/lib/arm-linux-gnueabihf/libatomic.so.1 /usr/local/autocrop/bin/autocrop -i ${FolderToSave} -o ${FolderToSave}/out
