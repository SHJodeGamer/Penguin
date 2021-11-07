module.exports = {
    name: "setlang-pt",
    code: `$title[<a:PartyGlasses:881573421287342080> Penguin <a:PartyGlasses:881573421287342080>]
    $description[Obrigado por usar o Penguin! Os comandos estão disponíveis com $getServerVar[prefixo]ajuda.]
    $footer[Caso queira remover essa linguagem digite: $getServerVar[prefixo]removelang;$authorAvatar]
    $addTimestamp
    $color[#0000ff]
    $setServerVar[pt;on]
    $setServerVar[language;ligado]
    $onlyPerms[admin;Você é fraco! Lhe falta permissão de \`administrador\` para usar esse comando!]
    $onlyIf[$getServerVar[en]==off;{title: <a:PartyGlasses:881573421287342080> Error <a:PartyGlasses:881573421287342080>}{description: Some language is already activated on this server!}{color: BLUE}{footer: Type $getServerVar[prefixo]removelang to remove the language.}]`
}