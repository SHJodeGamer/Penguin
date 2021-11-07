module.exports = {
  name: "<@826560271848833075>",
  code: `<a:toastyjam:881311896979013642> | Olá <@$authorID>, o meu prefixo é $getServerVar[prefixo], a lista de comandos está disponível com $getServerVar[prefixo]music! <a:toastydj:881311744478285884>
  $onlyIf[$getServerVar[pt]==on]
    $onlyIf[$getServerVar[language]==ligado;{title: :flag_us: No language on the server! | :flag_br: Sem linguagem no servidor!}{description: :flag_us: Type $getServerVar[prefixo]setlang-us to set the server language to English!
        :flag_br: Digite $getServerVar[prefixo]setlang-pt para colocar a linguagem do servidor em português!}]`,
      nonPrefixed: true
}