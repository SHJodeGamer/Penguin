module.exports = {
  name: "play",
  aliases: ['p', 'tocar', 'pl'],
  code: `$playSong[song[$message];10s;yes;yes;:x: Infelizmente aconteceu alguma coisa ao tentar executar a música.]
  $onlyIf[$getServerVar[language]==ligado;{color: #0000ff}{title: :flag_us: No language on the server! | :flag_br: Sem linguagem no servidor!}{description: :flag_us: Type $getServerVar[prefixo]setlang-us to set the server language to English!
    :flag_br: Digite $getServerVar[prefixo]setlang-pt para colocar a linguagem do servidor em português!}]`
}