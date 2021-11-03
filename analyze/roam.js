const forDate = require('./forDate')
const forUser = require('./forUser')
const forWord = require('./forWord')
const {allDate} = require('./allDate')
const {allWord} = require('./allWord')
const {allUser} = require('./allUser')

function roam(array, match){
    const newArray = array.map((struct, indice, array)=>{
        return match(struct)
    })
    return filterArray(newArray)
}

//Faz uma pre filtragem no array tirando casos que o objeto não foi criado corretamente
function filterArray(array){
    return array.filter((obj)=> obj != false)
}

function analyzeData(vetStruct, dataInit, dataEnd){
    return roam(vetStruct, forDate.createMatch([dataInit, dataEnd]))
}

function analyzeUser(vetStruct, user){
    return roam(vetStruct, forUser.createMatch(user))
}

function analyzeWord(vetStruct, word){
    return roam(vetStruct, forWord.createMatch(word))
}

module.exports = {
    analyzeData:analyzeData,
    analyzeUser:analyzeUser,
    analyzeWord:analyzeWord,
    analyzeAllDates:allDate,
    analyzeAllWords:allWord,
    analyzeAllUsers:allUser
}