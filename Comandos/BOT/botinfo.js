module.exports = {
    name: "botinfo",
    aliases: ['bi'],
    code: `$title[**__Penguin Music__**]
    $description[> **<:pessoa:906745681010622525> Usuários:** \`$allMembersCount\`

> **<:computador:906746215226568715> Servidores:** \`$serverCount\`

> **Convite:** [:3](https://discord.com/oauth2/authorize?client_id=826560271848833075&permissions=8&scope=bot%20applications.commands)


**__Hospedagem__**

> <:Garagem:906746990103236618>**Servidor:** \`StarCloud\`

> <:ruby:898897614458720266> **Plano:** \`Ruby\`

> <:ram:906747730871865355> **Memória Ram:** \`$ram\`

> <:Online:906748180698374186> **Online há:** \`$uptime\`


**__Desenvolvedor__**
\`SH JodeGamer#0001 || Nelly#0003\`]
$footer[Penguin é bem legal XD;$authorAvatar]
$thumbnail[$userAvatar[$clientID]]
$color[BLUE]
    
    $onlyIf[$getServerVar[pt]==on]
    $onlyIf[$getServerVar[language]==ligado;{title: :flag_us: No language on the server! | :flag_br: Sem linguagem no servidor!}{description: :flag_us: Type $getServerVar[prefixo]setlang-us to set the server language to English!
        :flag_br: Digite $getServerVar[prefixo]setlang-pt para colocar a linguagem do servidor em português!}]`
}