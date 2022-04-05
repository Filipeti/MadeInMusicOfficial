module.exports = {
    
    commands: "ping",
    description: "Comando di testing",
    usage: "!ping",
    
    callback: async (message, args) => {
        message.channel.send("Pong!")
    }
    
}