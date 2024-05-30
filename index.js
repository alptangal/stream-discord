import { Client } from "discord.js-selfbot-v13";
import { Streamer,streamLivestreamVideo } from '@dank074/discord-video-stream';

const streamer = new Streamer(new Client());
await streamer.client.login('MTEyMjcwNzU1MzczMDcwNzU1Nw.GvRT5F.bkbR8assT_S_szmxTP1qJzB-l5_wCSKAE1HE2I');
await streamer.joinVoice('1122707918177960047', '1200346808552001538');

const udp = await streamer.createStream({
    // stream options here
});
udp.mediaConnection.setSpeaking(true);
udp.mediaConnection.setVideoStatus(true);
try {
    const res = await streamLivestreamVideo("https://vtvgolive-vtv.vtvdigital.vn/1RRLolq9jYMWXI3WxRidOw/1717067354/vtvgo/vtv1-manifest.m3u8", udp);

    console.log("Finished playing video " + res);
} catch (e) {
    console.log(e);
} finally {
    udp.mediaConnection.setSpeaking(false);
    udp.mediaConnection.setVideoStatus(false);
}