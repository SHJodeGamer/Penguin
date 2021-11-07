module.exports = {
    name: "setlang-us",
    code: `$title[<a:PartyGlasses:881573421287342080> Penguin <a:PartyGlasses:881573421287342080>]
    $description[Thanks for using Penguin! Commands are available with $getServerVar[prefixo]help.]
    $footer[If you want to remove this language, type: $getServerVar[prefixo]removelang;$authorAvatar]
    $addTimestamp
    $color[#0000ff]
    $setServerVar[en;on]
    $setServerVar[language;ligado]
    $onlyPerms[admin;You are weak! You lack \`administrator\` permission to use this command!]
    $onlyIf[$getServerVar[pt]==off;{color: #0000ff}{title: <a:PartyGlasses:881573421287342080> Error <a:PartyGlasses:881573421287342080>}{description: Some language is already activated on this server!}{color: BLUE}{footer: Type $getServerVar[prefixo]removelang to remove the language.}]`
}