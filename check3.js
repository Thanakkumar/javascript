
let b="025468";
let c=b.length;

let d=b.split('');
let e=[d[0]];
for(i=1;i<c;i++)
{if(d[i]%2==0&&d[i-1]%2==0)
	{
e.push('-',d[i]);

	}
	else
	{
		e.push(d[i]);
	}
}
console.log(e.join(''));