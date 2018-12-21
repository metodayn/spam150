const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "1";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
});

client.on('ready', async() => {
var server = "514735931669086208"; // ايدي السررفر
var channel = "514774388344881153";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , HUSSAINxB , **')
    },305);
})

client.on('message', message => {metodayn metodayn metodyan <3}
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" metodayn metodyan metodayn ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" i love u ahmed i ove u ahmed ").slice(1);

  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 
client.login(process.env.BOT_TOKEN);
