function text(obj){
    return obj.text
}

function vet2string(array){
    return array.map(text).join(' ').toLowerCase()
}

function words(string){
    return string.split(' ')
}

function mockup(array){
    return words(vet2string(array))
}

module.exports = {
    allWord:mockup
}