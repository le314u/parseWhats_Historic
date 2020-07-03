//Apenas conversar em uma data X

function dataObj(obj){
    const vetData = obj.data.split('/')
    const vetHora = obj.hora.split(':')
    return new Date(Date.UTC(vetData[2], vetData[1]-1, vetData[0], vetHora[0], vetHora[1], 0, 0)).valueOf()
}

function rangeValid(range){
    if(range.hasOwnProperty('dataInit') && range.hasOwnProperty('dataEnd'))
        if(range.dataInit <= range.dataEnd)
            return true
    return false
}

function dataInRange(range, data){
    return ( rangeValid(range) && data >= range.dataInit && data <= range.dataEnd)
}

function matchData(range, obj){
    return dataInRange(range, dataObj(obj))?obj:false
}

function createRange(dataInit, dataEnd){
    const vetDataInit = dataInit.split('/')
    const vetDataEnd = dataEnd.split('/')
    return {
        dataInit: new Date(Date.UTC(vetDataInit[2], vetDataInit[1]-1, vetDataInit[0], 0, 0, 0, 0)).valueOf(),
        dataEnd: new Date(Date.UTC(vetDataEnd[2], vetDataEnd[1]-1, vetDataEnd[0], 23, 59, 59, 999)).valueOf()
    }
}

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