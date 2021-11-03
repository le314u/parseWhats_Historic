//Retorna o texto
function textObj(obj){
    return obj.text
}

//Verifica se a mensagem casa com o padrão de 're'
function matchText(re, obj){
    if(textObj(obj).match(re) == null)
        return false
    return obj
}

//cria uma função que verifica se a estrutura casa com a 're'
function createMatch(stringRegex){
    let re = new RegExp(stringRegex,'i')
    return (struct)=>{
        return matchText(re, struct)
    }
}

module.exports = {
    createMatch:createMatch
}