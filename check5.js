let arr = [0,3,2,4,5,2,3,6,3];

arr = arr.filter( function( item,index,inputArray ) {
           return inputArray.indexOf(item) == index;
    });

console.log(arr);