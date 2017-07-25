let arr=[];
let j=0;
for(let i=2;i<process.argv.length;i++){
    arr[j]=(process.argv[i]);
    j++;
}

let a=arr[0];
let b=arr[1];
let c=a.split('');
count=0;
for(i=0;i<c.length;i++)
{
	if(b.includes(c[i]))
	{
		count++;
	}
}
console.log(count);