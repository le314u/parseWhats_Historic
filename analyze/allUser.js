function name(obj){
    return obj.name
}

function names(array){
    return array.map(name)
}

function filter(array){
    return array.filter((element,index,vet)=>{
        return (index == vet.indexOf(element))
    })
}

function mockup(array){
    return filter(names(array))
}

module.exports = {
    allUser:mockup
}