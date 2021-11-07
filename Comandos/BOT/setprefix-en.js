module.exports = {
    name: "prefix",
    aliases: ['setprefix', 'prefixo'],
    code: `$title[<a:toastymated:881312005103972404> Prefix <a:toastymated:881312005103972404>]
    $description[**The server prefix has been changed to: \`$message[1]\`**]
    $footer[Use $message[1]help;$authorAvatar]
    $color[#0000ff]
    $addTimestamp
    $setServerVar[prefixo;$message[1]]
    $argsCheck[1;Put some prefix for me to use! Use: $getServerVar[prefixo]$commandName <prefix>]
    $onlyPerms[admin;You are weak! You lack \`administrator\` permission to use this command!]
    $onlyIf[$getServerVar[en]==on]
    `
}