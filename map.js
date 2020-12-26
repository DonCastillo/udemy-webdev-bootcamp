/**
 * returns the list of names without leading and trailing spaces
 */


const cleanNames = function(arrayList){
    return arrayList.map(function(el){
        return el.trim();
    });
}

console.log(cleanNames([" timothee", "  darth_hater", "sassyfrassy   ", " elton john   "]));