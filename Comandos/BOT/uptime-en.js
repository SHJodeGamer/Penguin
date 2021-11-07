module.exports = {
    name: "uptime",
    code: `$title[**Uptime | _Penguin_**]
    $description[**Oops my name is Penguin and I'm here to tell you how long I've been online!**
    Counting all the time I'm...
    
    Accurate $uptime of online time :3]
    $footer[Thanks for asking;$authorAvatar]
    $color[Blue]
    $addTimestamp
    $onlyIf[$getServerVar[en]==on]
    `
  }