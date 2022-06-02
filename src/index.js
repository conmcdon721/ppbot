const tmi = require("tmi.js");
const dotenv = require("dotenv");
dotenv.config();

const responses = require("./responses");

const client = new tmi.Client({
  identity: {
    username: process.env.BOT_USERNAME,
    password: process.env.OAUTH_TOKEN,
  },
  channels: [process.env.CHANNEL_NAME],
});

client.connect();

client.on("message", (channel, userstate, message, self) => {
  if (self) return;
  if (message.toLowerCase() === "!actualppsize") {
    client.say(
      channel,
      `@${userstate.username}, ${
        responses.responses[
          Math.floor(Math.random() * responses.responses.length)
        ]
      }`
    );
  }
});
