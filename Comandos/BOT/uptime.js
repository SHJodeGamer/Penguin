module.exports = {
  name: "uptime",
  code: `$title[**Uptime | _Penguin_**]
  $description[**Opa eu me chamo Penguin e estou aqui para lhe dizer o tempo que eu estou online!**
  Contando todo o tempo eu estou...
  
  Exatos $uptime de tempo online :3]
  $footer[Obrigado por perguntar;$authorAvatar]
  $color[Blue]
  $addTimestamp
  $onlyIf[$getServerVar[pt]==on]
  $onlyIf[$getServerVar[language]==ligado;{color: #0000ff{title: :flag_us: No language on the server! | :flag_br: Sem linguagem no servidor!}{description: :flag_us: Type $getServerVar[prefixo]setlang-us to set the server language to English!
      :flag_br: Digite $getServerVar[prefixo]setlang-pt para colocar a linguagem do servidor em português!}]`
}