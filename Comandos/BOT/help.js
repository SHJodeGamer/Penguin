module.exports = {
    name: "ajuda",
    aliases: ['help'],
    code: `$title[**<a:msica:863298091275911168> | _Penguin Music_ <a:msica:863298091275911168>**]
    $description[**Olá, seja bem vindo(a) aos meus comandos de música!
    Aqui estão todos os comandos que você pode usar:
    
    >  \`$getServerVar[prefixo]play\`
  
    >  \`$getServerVar[prefixo]pause\`
  
    >  \`$getServerVar[prefixo]resume\`
  
    >  \`$getServerVar[prefixo]stop\`
  
    >  \`$getServerVar[prefixo]volume\`
  
    >  \`$getServerVar[prefixo]playlist\`
  
    >  \`$getServerVar[prefixo]skip\`
  
    >  \`$getServerVar[prefixo]loop\`**]
    $image[https://i.imgur.com/N1oyXr3.gif]
    $thumbnail[$userAvatar[$clientID]]
    $color[#0000ff]
    $footer[Pedido por: $username;$authorAvatar]
    $addTimestamp
    $onlyIf[$getServerVar[pt]==on]
    `
}
