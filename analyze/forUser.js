//Retorna o nome (Origem da mensagem)
function userObj(obj){
    return obj.name
}

//Verifica se a data é compativel com 're'
function matchName(re, obj){
    if(userObj(obj).match(re) == null)
        return false
    return obj
}

//cria uma função que verifica se a estrutura casa com a 're'
function createMatch(stringRegex){
    let re = new RegExp(stringRegex)
    return (struct)=>{
        return matchName(re, struct)
    }
}
module.exports = {
    createMatch:createMatch
}