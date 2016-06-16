/**
 * Your slackbot token is available as the global variable:

process.env.SLACKBOT_TOKEN

 * When deployed to now.sh, the URL of your application is available as the
 * global variable:

process.env.NOW_URL

 * The URL is useful for advanced use cases such as setting up an Outgoing
 * webhook:
 * https://github.com/howdyai/botkit/blob/master/readme-slack.md#outgoing-webhooks-and-slash-commands
 *
 */


var Botkit = require('botkit');
var controller = Botkit.slackbot();
var bot = controller.spawn({
  token: process.env.SLACKBOT_TOKEN
})
bot.startRTM(function(error, whichBot, payload) {
  if (error) {
    throw new Error('Could not connect to Slack');
  }
});



// IDEA Bot that watches RSS Feed and posts message plus emoji.
// Bot listens for RSS updates
// Bot Name "NCP hard worker"
// Bot Avatar ":ghost:"
// Replys - Repo Updated :boom:

// Chooses an icon :boom: :raised_hands: :thumbsup: :star2: :sunglasses:

var emojiList = [':boom:', ':raised_hands:', ':thumbsup:', ':star2:', ':sunglasses:']

function getRandom() {
  return Math.floor(Math.random() * emojiList.length);
}

controller.hears('RSS',['direct_message'],function(bot,message) {
  bot.reply(message,{
    text: 'Deployed to repo ' + emojiList[getRandom()],
    username: "NCP hard worker",
    icon_emoji: ":ghost:",
  });
})
