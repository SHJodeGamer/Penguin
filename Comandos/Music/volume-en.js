module.exports = {
    name: "volume",
    aliases: ['v'],
    code: `$volume[$message[1]]
    $title[**<a:msica:863298091275911168> Volume | _Penguin_ <a:msica:863298091275911168>**]
    $description[Volume has been set to: \`$message[1]\`.]
    $footer[Volume;$authorAvatar]
    $color[#0000ff]
    $addTimestamp
    $image[https://i.imgur.com/N1oyXr3.gif]
    $suppressErrors[There are no songs playing, to play type: $getServerVar[prefixo]play.|]
  
    $argsCheck[1;Enter some number to change the volume! Use: $getServerVar[prefixo]$commandName <number>]
    $onlyIf[$getServerVar[en]==on]
`
  }