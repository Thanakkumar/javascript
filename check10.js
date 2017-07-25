let a=[{name:"David", marks:80},
{name:"Vinoth",marks:77},
{name:"Divya", marks: 88},
{name:"Ishitha",marks:95},
{name:"Thomas",marks:68}];
for(i=0;i<a.length;i++)
{
if(a[i].marks>50&&a[i].marks<60)
{
	a[i].grade="F";
}
if(a[i].marks>60&&a[i].marks<70)
{a[i].grade="D";

}
if(a[i].marks>70&&a[i].marks<80)
{
	a[i].grade="C";
}
if(a[i].marks>=80&&a[i].marks<90)
{a[i].grade="B";
	
}
if(a[i].marks>90&&a[i].marks<100)
{
	a[i].grade="A";
}
}
console.log(a);