module.exports = {
    name: "playlist",
    aliases: ['fila', 'queue'],
    code: `$title[<a:msica:863298091275911168> Playlist <a:msica:863298091275911168>]
    $description[$queue]
    $footer[playlist;$authorAvatar]
    $addTimestamp
  
    $color[#0000ff]
    $suppressErrors[There are no songs playing, to play type: $getServerVar[prefixo]play.]
    $onlyIf[$getServerVar[en]==on]`
}