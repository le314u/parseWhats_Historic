
function search(re, string){
    const outMatch = string.match(re)
    const data = outMatch[0]
    const rest = outMatch['input'].substring(outMatch['index'] + data.length)
    return [data,rest]
}

module.exports =  function createDate(line){
    try {
        const re_data = new RegExp("[0-9][0-9]/[0-9][0-9]/[0-9][0-9]")
        const data = search(re_data, line)
        const re_hora = new RegExp("[0-9][0-9]:[0-9][0-9]");
        const hora = search(re_hora, data[1]);
        const re_aux = new RegExp(" - ");
        const aux = search(re_aux, hora[1])
        const re_name = new RegExp("[^:]*");
        const name = search(re_name, aux[1])
        const re_text = new RegExp(": ");
        const text = search(re_text, hora[1])
        return {
            "data":data[0],
            "hora":hora[0],
            "name":name[0],
            "text":text[1]
        }
    } catch (error) {
        return  {
            "data":false,
            "hora":false,
            "name":false,
            "text":line
        }
    }
}