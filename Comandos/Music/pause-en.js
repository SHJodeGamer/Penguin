module.exports = {
    name: "pause",
    aliases: ['pausar'],
    code: `$pauseSong
    $title[**Pause | _Penguin_** <a:msica:863298091275911168>]
    $description[**The song was successfully paused!**]
    $footer[Pause;$authorAvatar]
    $addTimestamp
    $image[https://i.imgur.com/HvfHcmb.gif]
    $color[#0000ff]
  
    $suppressErrors[There are no songs playing, to play type: $getServerVar[prefixo]play.]
    $onlyIf[$getServerVar[en]==on]
`
  }