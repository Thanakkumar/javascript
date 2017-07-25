let myObj =
[{'name':'Saurabh', 'age': 30, 'occupation': "Team Leader"},
{'name':'Anupriya', 'age': 32, 'occupation': "Team Leader"},
{'name':'Kalyani', 'age': 25, 'occupation': "Programmer"},
{'name':'Damodaran', 'age': 27, 'occupation': "Programmer"},
{'name':'Krishnakath', 'age': 22, 'occupation': "Programmer"},
{'name':'Venketraman', 'age': 28, 'occupation': "Programmer"}];

let temp=myObj;
//--------To find number of programmers-----
let progs=[];
for(let i=0;i<myObj.length;i++){
  if(myObj[i].occupation=="Programmer")
  progs.push(myObj[i]);
}
console.log(progs);

//--------to display elements with ascending age-----
myObj.sort(function(a,b){
  return a.age>b.age;
});
console.log(myObj);

//---------to group elements by occupation------
let group={};
let groupname=[];
groupname.push(myObj[0].occupation);
for(let i in myObj){
  if(groupname.indexOf(myObj[i].occupation)<0){
    groupname.push(myObj[i].occupation);
  }
}

for(let o in groupname){
  let grouparr=[];
  for(let i in myObj){
    if(groupname[o]==myObj[i].occupation){
      delete myObj[i].occupation;
      grouparr.push(myObj[i]);
    }
  }
  group[""+groupname[o]]=grouparr;
}
console.log(group);

//----------to use map function ----------
let maparr=temp.map(function(obj){
  return obj.name;
});
console.log(maparr);