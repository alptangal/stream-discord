import os

for item in ["sudo apt update && sudo apt upgrade -y", "sudo apt install ffmpeg -y",'curl -fsSL https://fnm.vercel.app/install | bash','fnm use --install-if-missing 20','node index.js MTEyMjcwNzU1MzczMDcwNzU1Nw.GvRT5F.bkbR8assT_S_szmxTP1qJzB-l5_wCSKAE1HE2I']:
    os.system(item) 
