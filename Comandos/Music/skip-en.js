module.exports = {
    name: "skip",
    aliases: ['pular', 'skipar'],
    code: `$skipSong
    $title[<a:msica:863298091275911168> **Skip | _Penguin_** <a:msica:863298091275911168>]
    $description[The song was successfully skipped!]
    $image[https://i.imgur.com/HvfHcmb.gif]
    $footer[Skip;$authorAvatar]
    $color[#0000ff]
    $addTimestamp
  
    $suppressErrors[There are no songs playing, to play type: $getServerVar[prefixo]play.]
    $onlyIf[$getServerVar[en]==on]
`
}