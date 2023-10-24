function multiplyArrayElements(arr){
    result = arr.map(element => element * 2);
    return [result.slice(0,1), ...result]
}