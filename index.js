const Aoijs = require("aoi.js")

// Deixar o Bot online 24/7
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  response.sendStatus(200);
});
 
app.listen(process.env.PORT);

const bot = new Aoijs.Bot({
 mobile: false, 
     sharding: true,
    shardAmount: 4,
 token: "",
 prefix: ["$getServerVar[prefixo]"], 
 autoUpdate: false,
})

bot.variables({
prefixo: "!",
readylogs: "881683543737131018"
})

bot.variables({
      pt: "off",
      en: "off"
      })

bot.variables({
      language: "desligado"
      })

bot.readyCommand({
      channel: "$getVar[readylogs]",
      code: `$title[<a:msica:863298091275911168> **$username[$clientID] | READY** <a:msica:863298091275911168>]
      $description[Fiquei online e estou com:
      
      > $serverCount Servidores <:police:858197726008180767>

      > $allChannelsCount Canais <:police:858197726008180767>

      > $allMembersCount Membros! <:police:858197726008180767>

      > Ping: $pingms

      Dono: \`SH JodeGamer#0001\`
]
$footer[Ready;$userAvatar[$clientID]]
$addTimestamp
$color[BLUE]
$thumbnail[$userAvatar[$clientID]]
$image[https://i.imgur.com/N1oyXr3.gif]
`
  })

bot.onGuildLeave()
bot.onGuildJoin()

bot.botJoinCommand({
      channel: "881683543737131018",
      code: `
      $title[**<a:msica:863298091275911168> ADD | _Penguin_ <a:msica:863298091275911168>**]
      $description[
**Nome do servidor:**
\`$serverName\`
            
**ID Do Servidor:**
\`$guildID\`

**ID Do Dono:**
\`$ownerID\`
            
**Dono Do Servidor:**
\`$username[$ownerID]\`

**Total de usuários:**
\`$membersCount\`

**Total De Canais:**
\`$channelCount\`
]
            $color[BLUE]
            $thumbnail[$serverIcon]
            $addTimestamp`
      })

bot.onMessage() 
bot.loadCommands(`./Comandos/`)


bot.status({
      text: "My prefix is !",
      type: "LISTENING",
      time: 15
})

bot.status({
      text: "My prefix is !",
      type: "LISTENING",
      time: 15
})

bot.status({
      text: "🌐 2 Languages 🌐",
      type: "LISTENING",
      time: 15
})

bot.status({
      text: "🔥 $uptime online 🔥",
      type: "STREAMING",
      time: 15
})


bot.botJoinCommand({
      channel: "$randomChannelID",
      code: `
      $title[**Thanks for inviting me to your server!**]
      $description[**I'm Penguin and I have lots of features for you! Use $getServerVar[prefixo]music or help.**]
      $footer[Website: (Maintenance)]
      $color[BLUE]`
    })





bot.musicStartCommand({ 
channel: "$channelID", 
code: `$channelSendMessage[$channelID;{title: **<a:msica:863298091275911168> Play | _Penguin_ <a:msica:863298091275911168>**}{description: **🎵 $songInfo[title] Adicionado a playlist e está tocando agora!**}{footer: Play}{color: #0000ff}{image: https://i.imgur.com/N1oyXr3.gif}$addTimestamp]$onlyIf[$getServerVar[pt]==on]$onlyIf[$getServerVar[language]==ligado]` 
})
bot.musicEndCommand({ 
channel: "$channelID", 
code: `$channelSendMessage[$channelID;{title: A música acabou e eu sai do canal de voz!}{color: #0000ff}$onlyIf[$getServerVar[pt]==on]` 
})

bot.musicStartCommand({ 
channel: "$channelID", 
code: `$channelSendMessage[$channelID;{title: **<a:msica:863298091275911168> Play | _Penguin_ <a:msica:863298091275911168>**}{description: **🎵 $songInfo[title] Added to playlist and it's playing now!**}{footer: Play}{color: #0000ff}{image: https://i.imgur.com/HvfHcmb.gif}$addTimestamp]$onlyIf[$getServerVar[en]==on]$onlyIf[$getServerVar[language]==ligado;{title: :flag_us: No language on the server! | :flag_br: Sem linguagem no servidor!}{description: :flag_us: Type $getServerVar[prefixo]setlang-us to set the server language to English!
:flag_br: Digite $getServerVar[prefixo]setlang-pt para colocar a linguagem do servidor em português!}]` 
})
bot.musicEndCommand({ 
channel: "$channelID", 
code: `$channelSendMessage[$channelID;{title: The song ended and I left the voice channel!}{color: #0000ff}$onlyIf[$getServerVar[en]==on]` 
})


bot.command({
      name: "limpar_texto_do_canal",
      code: `$clear[$message[1]]
      $title[<:toastyfire:881311796743512085> Clear <:toastyfire:881311796743512085>]
      $description[**$message[1] Mensagens foram deletadas!**]
      $color[BLUE]
      $footer[Executado pelo meu dono;$authorAvatar]
      $addTimestamp
      $onlyForIds[771105879940005918;877005780002418778;Apenas o meu desenvolvedor pode usar esse comando!]`
      })
      


      bot.command({
            name: "$alwaysExecute",
            code: `
            $channelSendMessage[$channelID;{footer: $getServerVar[prefixo]removelang para remover a linguagem.}{title:<a:toastydj:881311744478285884> ERRO <a:toastydj:881311744478285884>}{description:<a:toastymated:881312005103972404> Esse comando nao existe! Use \`$getServerVar[prefixo]help\` para mais Informações!}{thumbnail:$authorAvatar}{color:BLUE}{delete:10s}]
            $onlyIf[$commandinfo[$replaceText[$message[1];$getServerVar[prefixo];];name]==;]
           $onlyIf[$stringStartsWith[$message;$getServerVar[prefixo]]!=false;]
           $onlyIf[$getServerVar[pt]==on]
           `
           })
      
      
      bot.command({
            name: "$alwaysExecute",
            code: `
                  $channelSendMessage[$channelID;{footer: $getServerVar[prefixo]removelang to remove the language.}{title:<a:toastydj:881311744478285884> ERROR <a:toastydj:881311744478285884>}{description:<a:toastymated:881312005103972404> This command does not exist! Use \`$getServerVar[prefixo]help\` for more information!}{thumbnail:$authorAvatar}{color:BLUE}{delete:10s}]
            $onlyIf[$commandinfo[$replaceText[$message[1];$getServerVar[prefixo];];name]==;]
           $onlyIf[$stringStartsWith[$message;$getServerVar[prefixo]]!=false;]
           $onlyIf[$getServerVar[en]==on]`
           })

bot.onInteractionCreate()


bot.interactionCommand({
      name: "play",
      code: `$interactionReply[$playSong[song[$message];10s;yes;yes;:x: Infelizmente aconteceu alguma coisa ao tentar executar a música.]]
      $interactionReply[$onlyIf[$getServerVar[language]==ligado;{color: #0000ff}{title: :flag_us: No language on the server! | :flag_br: Sem linguagem no servidor!}{description: :flag_us: Type $getServerVar[prefixo]setlang-us to set the server language to English!
        :flag_br: Digite $getServerVar[prefixo]setlang-pt para colocar a linguagem do servidor em português!}]]`
      })



