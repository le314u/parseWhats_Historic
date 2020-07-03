function userObj(obj){
    return obj.name
}

function matchName(re, obj){
    if(userObj(obj).match(re) == null)
        return false
    return obj
}

function createMatch(stringRegex){
    let re = new RegExp(stringRegex)
    return (struct)=>{
        return matchName(re, struct)
    }
}
module.exports = {
    createMatch:createMatch
}