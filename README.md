Extrai dados apartir de um backup/histórico de uma conversa de whatsapp previamente exportada

# Objetivo como Desenvolvedor

* Praticar o paradigma funcional

# Objetivo como Usuario

* Ter uma aplicação que permita filtrar conversas do whatsApp
* Ter uma base de dados para trabalhar com big Data

# Preparação
No aparelho celular com  whats configurado
* Selecione uma Conversa
* Exporte uma conversa
(**Configurações > Mais > Exportar conversa**)

# Como usar 
 * Carregue o arquivo exportado
 
 `let conversas = await struct('./Arquivo_exportado')`
 
 * Filtre de acordo com suas preferências
 
 `analyzeAllDates(conversas)` retorna as datas das conversas
 
 `analyzeAllWords(conversas)` retorna as palavras das conversas
 
 `analyzeAllUsers(conversas)` retorna os usuários das conversas
 
 `analyzeData(conversas, string_data_inicio, string_data_final)` retorna todas as conversas dentro do range
 
 `analyzeUser(conversas, string_nome_usuarios)` retorna todas as conversas do usuário
 
 `analyzeWord(conversas, string_regex)` retorna todas as conversas que casem com o regex
 ```
 
 function exemplo(conversas){
    datas = analyzeAllDates(conversas)
    words = analyzeAllWords(conversas)
    users = analyzeAllUsers(conversas)
    conversas = analyzeData(conversas,'01/01/20','01/12/20')
    conversas = analyzeUser(conversas,'Lucas')
    conversas = analyzeWord(conversas,'.*pergunta.*')
```
