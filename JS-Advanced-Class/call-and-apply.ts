const array = [1,5,3];
     
function getMaxNumber(arr: number[]){
    console.log(Math.max.apply(null, arr));
    return Math.max.apply(null, arr);
}
 
getMaxNumber(array) // should return 3