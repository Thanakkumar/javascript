let myObj = [5, [22], [[14]], [[4]],[5,6]];
var a=[],j=0;
let fun=(obj)=>{
	if(typeof obj != "object"){
		a[j]=obj;j++;

	}else{

		for(let i in obj)
			fun(obj[i]);
	}
	return a;
}

console.log(fun(myObj));