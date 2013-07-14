copy /b game.nw "node-webkit/game.nw"
cd node-webkit
copy /b nw.exe+game.nw "../build/game.exe"
copy /b nw.pak "../build/nw.pak"
copy /b ffmpegsumo.dll "../build/ffmpegsumo.dll"
copy /b icudt.dll "../build/icudt.dll"
copy /b libEGL.dll "../build/libEGL.dll"
copy /b libGLESv2.dll "../build/libGLESv2.dll"
del game.nw
cd ..