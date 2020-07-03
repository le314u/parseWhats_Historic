function date(obj){
    return obj.data
}

function uniqDate(array){
    return array.map((struct,indice,array)=>{
        if(indice!=0){
            if(date(array[indice-1]) == date(struct)){
                newStruct = Object.assign({},struct)
                newStruct.data=false
                return newStruct
            }
        }
        return Object.assign({},struct)
    })
}

function filterData(array){
    return array.filter((obj)=>{
        return date(obj)!=false
    })
}

function mockup(array){
    return filterData(uniqDate(array)).map(date)
}

module.exports = {
    allDate:mockup
}