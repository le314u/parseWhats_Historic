function textObj(obj){
    return obj.text
}

function matchText(re, obj){
    if(textObj(obj).match(re) == null)
        return false
    return obj
}

function createMatch(stringRegex){
    let re = new RegExp(stringRegex)
    return (struct)=>{
        return matchText(re, struct)
    }
}

module.exports = {
    createMatch:createMatch
}