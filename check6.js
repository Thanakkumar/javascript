
function func_diff(a1,a2){
	// for(i=0;i<a2.length;i++)
	// {
	// 	if(!a1.includes(a2[i]))
	// 	{
	// 		c.push(a2[i]);
	// 	}
	// }
	// for(i=0;i<a1.length;i++)
	// {
	// 	if(!a2.includes(a1[i]))
	// 	{
	// 		c.push(a1[i]);
	// 	}
	// }return c;

for(i=0;i<a1.length;i++)
{console.log(a1[i]);
	if(a2.indexOf(a1[i]) === -1)
	{
		c.push(a1[i]);
	}
}

for(i=0;i<a2.length;i++)
{
	if(a1.indexOf(a2[i]) === -1)
	{
		c.push(a2[i]);
	}
}
return c;
}

let a=[1,2,3,4];
let b=[2,3,4,5,6];
let c=[];
var r=func_diff(a,b);
console.log(r);

