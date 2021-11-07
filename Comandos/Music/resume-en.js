module.exports = {
    name: "resume",
    aliases: ['unpause', 'despausar'],
    code: `
    $title[**<a:msica:863298091275911168> Resume | _Penguin_ <a:msica:863298091275911168>**]
    $description[**The music started playing again!**]
    $color[#0000ff]
    $footer[Resume;$authorAvatar]
    $addTimestamp
    $image[https://i.imgur.com/HvfHcmb.gif]
   
    $resumeSong
    $suppressErrors[There are no songs playing, to play type: $getServerVar[prefixo]play.]
    $onlyIf[$getServerVar[en]==on]
`
  }