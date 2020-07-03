let struct = require('./struct/struct')
let {analyzeData,analyzeUser,analyzeWord,analyzeAllDates,analyzeAllWords,analyzeAllUsers} = require('./analyze/roam')

async function main(){
    let structs = await struct('./Conversa2')
    datas = analyzeAllDates(structs)
    words = analyzeAllWords(structs)
    users = analyzeAllUsers(structs)
    structs = analyzeData(structs,'01/01/20','01/12/20')
    structs = analyzeUser(structs,'Lucas')
    structs = analyzeWord(structs,'.*pergunta.*')
    console.log("Durante:",datas[0],'até',datas[datas.length-1])
    console.log('Conversa entre:',users.join(', '))  

}
main()