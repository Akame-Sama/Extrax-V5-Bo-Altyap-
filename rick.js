const aoijs = require("aoi.js")
const bot = new aoijs.Bot({
token: process.env.token, 
prefix: "$getServerVar[prefix]", 
intents: "all" 
})

//Biliyom Kanın Kaynıyor Kodlarla Oynaşmak İstiyosun Yapmmmma!

bot.onMessage()


bot.command({
name: "rick",
code: `https://discord.gg/ARfNBj84Mb`
})

////Eee Silsenizde Olur .d 



bot.readyCommand({
    channel: "",
    code: `$log[💗 $userTag[$clientID] 💠]`
})


const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd,'./komutlar/') 


bot.variables({
  prefix:"r!",
  })