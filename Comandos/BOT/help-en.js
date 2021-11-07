module.exports = {
    name: "help",
    aliases: ['ajuda'],
    code: `$title[**<a:msica:863298091275911168> | _Penguin Music_ <a:msica:863298091275911168>**]
    $description[**Hello, welcome to my music commands!
        Here are all the commands you can use:
       
        > \`$getServerVar[prefixo]play\`
     
        > \`$getServerVar[prefixo]pause\`
     
        > \`$getServerVar[prefixo]resume\`
     
        > \`$getServerVar[prefixo]stop\`
     
        > \`$getServerVar[prefixo]volume\`
     
        > \`$getServerVar[prefixo]playlist\`
     
        > \`$getServerVar[prefixo]skip\`
     
        > \`$getServerVar[prefixo]loop\`**]
    $image[https://i.imgur.com/HvfHcmb.gif]
    $thumbnail[$userAvatar[$clientID]]
    $color[#0000ff]
    $footer[By $username;$authorAvatar]
    $addTimestamp
    $onlyIf[$getServerVar[en]==on]
    $onlyIf[$getServerVar[language]==ligado;{color: #0000ff}{title: :flag_us: No language on the server! | :flag_br: Sem linguagem no servidor!}{description: :flag_us: Type $getServerVar[prefixo]setlang-us to set the server language to English!
        :flag_br: Digite $getServerVar[prefixo]setlang-pt para colocar a linguagem do servidor em português!}]`
}