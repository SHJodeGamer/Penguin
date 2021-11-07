module.exports = {
    name: "stop",
    aliases: ['leave', 'disconnect'],
    code: `$leaveVC
    $title[**<a:msica:863298091275911168> Stop | _Penguin_ <a:msica:863298091275911168>**]
    $description[Successfully disconnected!]
    $footer[Stop;$authorAvatar]
    $color[#0000ff]
    $addTimestamp
    $image[https://i.imgur.com/N1oyXr3.gif]
    
  
    $suppressErrors[There are no songs playing, to play type: $getServerVar[prefixo]play.]
    $onlyIf[$getServerVar[en]==on]
`
  }