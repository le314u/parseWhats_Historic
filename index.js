let struct = require('./struct/struct')
let {analyzeData,analyzeUser,analyzeWord,analyzeAllDates,analyzeAllWords,analyzeAllUsers} = require('./analyze/roam')

async function main(){
    let structs = await struct('./w.txt')

    process(structs,'01/01/21','01/12/21','Jeff','torresmo')
    process(structs,'01/01/21','01/12/21','Paulo H','torresmo')
    process(structs,'01/01/21','01/12/21','Leandro','torresmo')
    process(structs,'01/01/21','01/12/21','João','torresmo')
    process(structs,'01/01/21','01/12/21','@All','pomo')
}

function process(structs,dInit,dEnd,user,word){
    structs = analyzeData(structs,dInit,dEnd)
    structs = user != '@All' ? analyzeUser(structs,user) : structs
    structs = analyzeWord(structs,word)

    datas = analyzeAllDates(structs)
    words = analyzeAllWords(structs)
    users = analyzeAllUsers(structs)

    console.log("Durante:",dInit,'até',dEnd,user,"falou",word,structs.length,"vezes")
}


main()


