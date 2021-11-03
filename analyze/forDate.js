//Retorna a data da msg
function dataObj(obj){
    const vetData = obj.data.split('/')
    const vetHora = obj.hora.split(':')
    if(parseInt(vetData[2]) <= 1000 ){ vetData[2] = String(2000+parseInt(vetData[2]))}
    return new Date(Date.UTC(vetData[2], vetData[1]-1, vetData[0], vetHora[0], vetHora[1], 0, 0)).valueOf()
}

//verifica se o range é sintaticamente correto (Inicio <= Fim)
function rangeValid(range){
    if(range.hasOwnProperty('dataInit') && range.hasOwnProperty('dataEnd'))
        if(range.dataInit <= range.dataEnd)
            return true
    return false
}

//Verifica se a data está dentro do range
function dataInRange(range, data){
    return ( rangeValid(range) && data >= range.dataInit && data <= range.dataEnd)
}

//Verifica se a data é compativel com o range
function matchData(range, obj){
    return dataInRange(range, dataObj(obj))?obj:false
}

//Cria um range de data
function createRange(dataInit, dataEnd){
    const vetDataInit = dataInit.split('/')
    if(parseInt(vetDataInit[2]) < 1000 ){ vetDataInit[2] = String(2000+parseInt(vetDataInit[2]))}
    const vetDataEnd = dataEnd.split('/')
    if(parseInt(vetDataEnd[2]) < 1000 ){ vetDataEnd[2] = String(2000+parseInt(vetDataEnd[2]))}

    return {
        dataInit: new Date(Date.UTC(vetDataInit[2], vetDataInit[1]-1, vetDataInit[0], 0, 0, 0, 0)).valueOf(),
        dataEnd: new Date(Date.UTC(vetDataEnd[2], vetDataEnd[1]-1, vetDataEnd[0], 23, 59, 59, 999)).valueOf()
    }
}

//cria uma função que verifica se a estrutura casa com a data
function createMatch(part){
    const dataInit = part[0]
    const dataEnd = part[1]
    const range = createRange(dataInit, dataEnd)
    return (struct)=>{
        return matchData(range, struct)
    }
}

module.exports = {
    createMatch:createMatch
}