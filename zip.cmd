SET PATH_TO_GAME=D:\GitHub\2d-game-engine\
SET PATH_TO_7ZIP=C:\Program Files\7-Zip\

"%PATH_TO_7ZIP%7z" a -y -tzip -o"%PATH_TO_GAME%source" game.nw "%PATH_TO_GAME%source\*"