module.exports = {
    
    commands: ["play", "p", "start", "s"],
    description: "Starta la musica",
    usage: "!play",
    
    callback: async (message, args) => {
        
        const voiceChannel = message.member.voice.channel;
        if(!voiceChannel){
            return message.reply("🔊🚫Devi necessariamente connetterti in un canale vocale per far partire la musica.");
        }
        
        const voiceChannelBot = message.guild.channels.cache.find(x => x.type == "GUILD_VOICE" && x.members.has(clent.user.id))
        if(voiceChannelBot && voiceChannel.id =! voiceChannelBot.id){
            return message.reply(":x:Il bot è momentaneamente utilizzato da un'altra utenza, attendere il termine del processo...")
        }
        
        let args = message.content.split(/\s+/)
        let query = args.slixe(1).join(" ")
        
        if(!query){
            return message.reply("🎵Inserisci un brano da riprodurre.")
        }
        
        distube.play(voiceChannelBot || voiceChannel, query, {
            member: message.member,
            textChannel: message.channel,
            message: message
        })
        
    }
    
}