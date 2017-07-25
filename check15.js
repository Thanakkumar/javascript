let jsonStr = '{"mike":"Book","jason":"sweater","chels":"iPad"}';

let myObj=JSON.parse(jsonStr);

let arr=Object.keys(myObj);
for (let k in arr){
  console.log(arr[k]+" : "+myObj[arr[k]]);
}