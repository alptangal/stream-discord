import os

for item in ["apt update && sudo apt upgrade -y", "apt install ffmpeg -y",'docker pull node:20-alpine','node index.js']:
    os.system(item) 
