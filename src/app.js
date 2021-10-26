import tmi from 'tmi.js'
import { BOT_USERNAME, OAUTH_TOKEN, CHANNEL_NAME, guestStreamer, messages } from './constants.js';

console.log(process.env)

const options = {
	options: { debug: true, messagesLogLevel: "info" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: BOT_USERNAME,
		password: OAUTH_TOKEN
	},
	channels: [ CHANNEL_NAME ]
}

const client = new tmi.Client(options);

client.connect().catch(console.error);

client.on('message', (channel, userstate, message, self) => {
	if(self) return;
	if(message.toLowerCase() === '!actualppsize') {
		client.say(channel, `@${userstate.username}, ${messages[Math.floor(Math.random() * messages.length)]}`);
	}
});