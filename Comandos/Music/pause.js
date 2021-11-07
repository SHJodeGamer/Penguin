module.exports = {
  name: "pause",
  aliases: ['pausar'],
  code: `$pauseSong
  $title[**Pause | _Penguin_** <a:msica:863298091275911168>]
  $description[**A música foi pausada com sucesso!**]
  $footer[Pause;$authorAvatar]
  $addTimestamp
  $image[https://i.imgur.com/N1oyXr3.gif]
  $color[#0000ff]

  $suppressErrors[Não há músicas tocando, para tocar digite: $getServerVar[prefixo]play.]
  $onlyIf[$getServerVar[pt]==on]
  $onlyIf[$getServerVar[language]==ligado;{title: :flag_us: No language on the server! | :flag_br: Sem linguagem no servidor!}{description: :flag_us: Type $getServerVar[prefixo]setlang-us to set the server language to English!
    :flag_br: Digite $getServerVar[prefixo]setlang-pt para colocar a linguagem do servidor em português!}]`
}