let a=28,b=50,c=16,d=14,e=13;
if(a>b)
{
	if(a>c)
	{ if(a>d)
		{
			if(a>e)
			{
				console.log(a+" is larger");
			}
			else
			{
				console.log(e+" is larger");
			}
		}

	}
	else
	{
		if(c>d)
		{
			if(c>e)
			{console.log(c+" is larger");

			}
			else
			{console.log(e+" is larger");

			}
		}
		else
		{
			if(d>e)
			{
				console.log(d+" is larger");
			}
			else
			{
				console.log(e+" is larger");
			}
		}

	}

}
else if(b>c)
{
	if(b>d)
      {
		if(b>e)
		{
		console.log(b+" is larger");	
		}
		else
		{
			console.log(e+" is larger");
		}

	}
	else
	{
		if(d>e)
		{
			console.log(d+" is larger");	
		}
		else
		{console.log(e+" is larger");

		}
	}
	
}
else
{if(c>d)
	{if(c>e)
		{
			console.log(c +" is greater");
		}
		else
		{console.log(e +" is greater");

		}
	}

	else if(d>e)
{
	console.log(d+" is larger");
}
else
{
	console.log(e+" is larger");
}
}

