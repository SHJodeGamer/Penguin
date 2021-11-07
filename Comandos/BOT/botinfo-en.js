module.exports = {
    name: "botinfo",
    aliases: ['bi'],
    code: `$title[**__Penguin Music__**]
    $description[> **<:pessoa:906745681010622525> Users:** \`$allMembersCount\`

> **<:computador:906746215226568715> Servers:** \`$serverCount\`

> **Invite:** [:3](https://discord.com/oauth2/authorize?client_id=826560271848833075&permissions=8&scope=bot%20applications.commands)


**__Host__**

> <:Garagem:906746990103236618>**Server:** \`StarCloud\`

> <:ruby:898897614458720266> **Plan:** \`Ruby\`

> <:ram:906747730871865355> **RAM:** \`$ram\`

> <:Online:906748180698374186> **Uptime:** \`$uptime\`


**__Developer__**
\`SH JodeGamer#0001 || Nelly#0003\`]
$footer[Penguin is cool XD;$authorAvatar]
$thumbnail[$userAvatar[$clientID]]
$color[BLUE]
    
    $onlyIf[$getServerVar[en]==on]`
}