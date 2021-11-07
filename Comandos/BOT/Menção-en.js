module.exports = {
    name: "<@826560271848833075>",
    code: `<a:toastyjam:881311896979013642> | Hello <@$authorID>, my prefix is: $getServerVar[prefixo], the list of commands is available with $getServerVar[prefixo]music! <a:toastydj:881311744478285884>
    $onlyIf[$getServerVar[en]==on]
      $onlyIf[$getServerVar[language]==ligado;{color: #0000ff{title: :flag_us: No language on the server! | :flag_br: Sem linguagem no servidor!}{description: :flag_us: Type $getServerVar[prefixo]setlang-us to set the server language to English!
          :flag_br: Digite $getServerVar[prefixo]setlang-pt para colocar a linguagem do servidor em português!}]`,
        nonPrefixed: true
  }