const Discord = require('discord.js');
const client = new Discord.Client();
const PREFIX = "!";

client.on('ready', () => {
console.log("this bot is online!!");
)};

client.on('message', message => { 
    if (message.content === '!h') {
     {
                if(message.member.voiceChannelID)
            { 
                if(!message.guild.voiceChannelID)
                { 
                    message.member.setVoiceChannel()
                    .then(connection =>{
                        message.reply(`המשתמש הזה
<@&652882379261607936> צריך את העזרה שלכם\`\`\``+ message.member.voiceChannel.name+`המשתמש נימצא בחדר דיבור\`\`\`:mute: :no_entry_sign:`);
                    })
                }
            }
            else
        { 
            message.reply(`המשתמש הזה
<@&652882379261607936> צריך את העזרה שלכם\`\`\`המשתמש לא נמצא באף חדר דיבור \`\`\` :mute: :no_entry_sign:`);

        }
    }   

	}
});

client.login(process.env.BOT_TOKEN);
