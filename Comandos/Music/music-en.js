module.exports = {
    name: "music",
    aliases: ['música', 'musica'],
    code: `$title[**<a:msica:863298091275911168> | _Penguin Music_ <a:msica:863298091275911168>**]
    $description[**Hello, welcome to my music commands!
        Here are all the commands you can use:
    
    >  \`$getServerVar[prefixo]play\`
  
    >  \`$getServerVar[prefixo]pause\`
  
    >  \`$getServerVar[prefixo]resume\`
  
    >  \`$getServerVar[prefixo]stop\`
  
    >  \`$getServerVar[prefixo]volume\`
  
    >  \`$getServerVar[prefixo]playlist\`
  
    >  \`$getServerVar[prefixo]skip\`
  
    >  \`$getServerVar[prefixo]loop\`**]
    $image[https://i.imgur.com/HvfHcmb.gif]
    $thumbnail[$userAvatar[$clientID]]
    $color[#0000ff]
    $footer[by $username;$authorAvatar]
    $addTimestamp
    $onlyIf[$getServerVar[en]==on]`
  }