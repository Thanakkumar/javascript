let library = [
{ author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
{ author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
{ author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
];
library.sort(function(a, b){
    var nameA=a.title.toLowerCase(), nameB=b.title.toLowerCase();
    if (nameA < nameB)
        return -1 ;
    if (nameA > nameB)
        return 1;
    return 0; 
})
console.log(library);