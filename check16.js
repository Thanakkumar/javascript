let obj = {"One":"1","Two":"2","Three":"3","Four":"4"}

let arr=Object.keys(obj);
let valArray=[];
for (let k in arr){
  valArray.push(obj[arr[k]]);
}
console.log(valArray);