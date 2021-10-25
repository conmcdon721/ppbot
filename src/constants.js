import dotenv from 'dotenv';
dotenv.config();

// Environment variables
const BOT_USERNAME = process.env.BOT_USERNAME;
const OAUTH_TOKEN = 'oauth:' + process.env.OAUTH_TOKEN;
const CHANNEL_NAME = '#evanwahr';

// For messages[3]
const guestStreamer = [
    `BunkBunction`,
    `DoxxyMoronic`,
    `ConglerBigMac`,
    `Nuxh`,
    `DrBeal`,
    `NewtNumber3`,
    `RiceBalls`
];

const messages = [
    `Evan Wahr has a small dong! He's rocking two inches, on a good day!!`,
    `Evan Wahr is HUNG! I'm talking big MASSIVE cock!`,
    `Evan Wahr hasn't had genitals since the accident! Quit asking!`,
    `${guestStreamer[Math.floor(Math.random() * guestStreamer.length)]}? Yeah, I heard that guy was more of a show-er.`,
    `Evan Wahr has a dong that's just as big as Winston's.`,
    `Evan Wahr's cock grew three sizes bigger after he brutally killed Carl in his SOMA playthrough.`,
    `Evan Wahr's big ol' schlong was destroyed in the war. But we can rebuild him; we have the technology to make it bigger, better.`,
    `Evan Wahr's humongous ding-dong is the key to his success in Bloons Tower Defense.`,
    `Evan Wahr has a nice, juicy BBC.`,
    `Evan Wahr's thicc dick ain't just for pissin': it's so long it can strangle a grown man.`,
    `Evan Wahr's girthy hunk of man meat splurges when the Narwhal Bacons at Midnight, m'lady.`,
    `Evan Wahr's penis is approximately the size of one G Fuel tub.`,
    `Evan Wahr literally stole Tyler 'Ninja' Blevins' cock. He ripped it right off his body. So he's as big as Ninja.`,
    `Evan Wahr's pole is the meta.`,
    `Evan Wahr's willy is as long as his best Risk of Rain 2 run.`,
    `Evan Wahr's phallus is big enough to make you go, "I like that, that's a funny little character. Have you seen this little guy? Holy shit. Look at this little fella."`,
    `Evan Wahr's shaft is so immense that it made Gordon Ramsay go, "Right. Okay. Right, fuck me. Finally, some good fucking food."`,
    `if you have to ask, then Evan Wahr's wang is too big for you.`,
    `the size of Evan Wahr's one-eyed trouser snake cannot be determined because he is currently in Paris.`,
    `Joe Mama.`
    `a lot bigger than ${guestStreamer[Math.floor(Math.random() * guestStreamer.length)]}, that's for sure!`
];

export { BOT_USERNAME, OAUTH_TOKEN, CHANNEL_NAME, guestStreamer, messages };