function obtenerIndice (valor, array){
for(let i=0; i<array.length; i++){
    if(array[i] ===valor){
        return i;
    }
}
return -1
}

console.log(obtenerIndice(12, [5, 7, 12, 34, 54, 2, 2]))
console.log(obtenerIndice(83, [5, 7, 12, 34, 54, 2, 12]))