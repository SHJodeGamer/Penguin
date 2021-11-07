module.exports = {
    name: "loop",
    aliases: ['l', 'lo'],
    code: `$title[<a:msica:863298091275911168> Loop Music <a:msica:863298091275911168>]
    $description[**$songInfo[title] Está em Loop!**]
    $footer[Loop;$authorAvatar]
    $addTimestamp
  
    $color[#0000ff]
    $image[https://i.imgur.com/N1oyXr3.gif]
    $log[Executado por: $username | loop: $loopSong]
    $suppressErrors[Não há músicas tocando, para tocar digite: $getServerVar[prefixo]play.]
    $onlyIf[$getServerVar[pt]==on]
    $onlyIf[$getServerVar[language]==ligado;{color: #0000ff}{title: :flag_us: No language on the server! | :flag_br: Sem linguagem no servidor!}{description: :flag_us: Type $getServerVar[prefixo]setlang-us to set the server language to English!
        :flag_br: Digite $getServerVar[prefixo]setlang-pt para colocar a linguagem do servidor em português!}]`
}