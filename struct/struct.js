const input = require('./input')
const parse = require('./parserLine')

function mergeObj(struct, indice, array){
    // Tem um proximo?
    if(indice == array.length-1)
        return struct
    // Proximo precisa ser mesclado?
    if(structValid(array[indice+1])){
        return struct
    }
    //Mescla
    let newStruct = Object.assign(struct)
    newStruct.text = struct.text + array[indice+1].text
    //recursão 
    return mergeObj(newStruct, indice+1, array)
}

function fixArray(array){
    //
    return array.map((struct, indice, array)=>{
        if( structValid(array[indice]))
            return mergeObj(struct, indice, array)
    })
}

function structValid(struct){
    return (struct.data && struct.hora) != false
}

module.exports = async function createStruct(pathFileDialog){
    try {
        let data = await input(pathFileDialog)
        const linhas = data.split('\n') 
        const structData = linhas.map(parse)
        console.log(structData)
        const newArray = fixArray(structData)
        const returnArray = newArray.filter((obj)=> obj != undefined)
        if(returnArray.length == 0){
            let error = new Error("o arquivo não é um bkp de uma conversa do whatsApp")
            error.name = "InvalidFile"
            throw error
        }
        return returnArray
    } catch (error) {
        return error
    }
}