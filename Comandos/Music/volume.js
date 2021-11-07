module.exports = {
  name: "volume",
  aliases: ['v'],
  code: `$volume[$message[1]]
  $title[**<a:msica:863298091275911168> Volume | _Penguin_ <a:msica:863298091275911168>**]
  $description[volume foi definido para: \`$message[1]\`.]
  $footer[Volume;$authorAvatar]
  $color[#0000ff]
  $addTimestamp
  $image[https://i.imgur.com/N1oyXr3.gif]
  $suppressErrors[Não há músicas tocando, para tocar digite: $getServerVar[prefixo]play.]

  $argsCheck[1;Insira algum número para alterar o volume!]
  $onlyIf[$getServerVar[pt]==on]
  $onlyIf[$getServerVar[language]==ligado;{title: :flag_us: No language on the server! | :flag_br: Sem linguagem no servidor!}{description: :flag_us: Type $getServerVar[prefixo]setlang-us to set the server language to English!
    :flag_br: Digite $getServerVar[prefixo]setlang-pt para colocar a linguagem do servidor em português!}]`
}