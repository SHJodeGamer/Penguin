module.exports = {
    name: "removelang",
    aliases: ['rmlang', 'removerlinguagem'],
    code: `$title[**All server languages have been removed!**]
    $description[:flag_us: Type !setlang-us to set the server language to English!
        :flag_br: Digite !setlang-pt para colocar a linguagem do servidor em português!]
        $color[#0000ff]
        $image[https://i.imgur.com/HvfHcmb.gif]
        $setServerVar[pt;off]
        $setServerVar[en;off]
        $setServerVar[language;desligado]
        $onlyIf[$getServerVar[language]==ligado;**The server doesn't have any language yet!**]`
}