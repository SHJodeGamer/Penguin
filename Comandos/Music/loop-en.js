module.exports = {
    name: "loop",
    aliases: ['l', 'lo'],
    code: `$title[<a:msica:863298091275911168> Loop Music <a:msica:863298091275911168>]
    $description[**$songInfo[title] It's in Loop!**]
    $footer[Loop;$authorAvatar]
    $addTimestamp
  
    $color[#0000ff]
    $image[https://i.imgur.com/HvfHcmb.gif]
    $log[Executado por: $username | loop: $loopSong]
    $suppressErrors[There are no songs playing, to play type: $getServerVar[prefixo]play.]
    $onlyIf[$getServerVar[en]==on]`
}