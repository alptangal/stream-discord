import os

for item in ["apt update && sudo apt upgrade -y", "apt install ffmpeg -y",'docker pull node:20-alpine','node index.js MTEyMjcwNzU1MzczMDcwNzU1Nw.GvRT5F.bkbR8assT_S_szmxTP1qJzB-l5_wCSKAE1HE2I']:
    os.system(item) 
