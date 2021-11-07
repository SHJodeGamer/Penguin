module.exports = {
  name: "setavatar",
  code: `$setBotAvatar[$message[1]]
  $description[A minha foto foi mudada para:]
  $image[$message[1]]
  $argsCheck[1;Coloque um URL]
  $onlyForIDs[771105879940005918;793162901828534332;:x: Apenas meus donos podem usar esse comando!]
  $footer[Adorei!]
  $addTimestamp
  $color[#993399]`
}