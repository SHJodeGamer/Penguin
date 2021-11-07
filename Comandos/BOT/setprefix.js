module.exports = {
    name: "prefix",
    aliases: ['setprefix', 'prefixo'],
    code: `$title[<a:toastymated:881312005103972404> Prefixo <a:toastymated:881312005103972404>]
    $description[**O prefixo do servidor foi alterado para: \`$message[1]\`**]
    $footer[Use $message[1]help;$authorAvatar]
    $color[#0000ff]
    $addTimestamp
    $setServerVar[prefixo;$message[1]]
    $argsCheck[1;Coloque algum prefixo para eu usar! Use: $getServerVar[prefixo]$commandName <prefixo>]
    $onlyIf[$getServerVar[pt]==on]
    $onlyIf[$getServerVar[language]==ligado;{color: #0000ff}{title: :flag_us: No language on the server! | :flag_br: Sem linguagem no servidor!}{description: :flag_us: Type $getServerVar[prefixo]setlang-us to set the server language to English!
        :flag_br: Digite $getServerVar[prefixo]setlang-pt para colocar a linguagem do servidor em português!}]    `
}