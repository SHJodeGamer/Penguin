module.exports = {
  name: "setname",
  code: `$setBotName[$message[1]]
:3 O meu nome foi mudado para: \`$message[1]\`
  $argsCheck[1;Coloque um Nome!]
  $onlyForIDs[771105879940005918;793162901828534332;:x: Apenas meus donos podem usar esse comando!]`
}