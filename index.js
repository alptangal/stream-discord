import { Client } from "discord.js-selfbot-v13";
import { Streamer,streamLivestreamVideo } from '@dank074/discord-video-stream';


const streamer = new Streamer(new Client());
await streamer.client.login(process.env.token);
await streamer.joinVoice('1122707918177960047', '1200346808552001538');

const udp = await streamer.createStream({
// stream options here
});
udp.mediaConnection.setSpeaking(true);
udp.mediaConnection.setVideoStatus(true);
try {
const res = await streamLivestreamVideo("https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8", udp);

console.log("Finished playing video " + res);
} catch (e) {
console.log(e);
} finally {
udp.mediaConnection.setSpeaking(false);
udp.mediaConnection.setVideoStatus(false);
}


