
const student = [
    {id : 44, name : "sakib"},
    {id : 56, name : "misha"},
    {id : 54, name : "dipjol"},
    {id : 49, name : "mannnaa"},
]

let  names = student.map(d => d.name);
let  ids = student.filter(d => d.id>54);
let  finds = student.find(d => d.id<49);


console.log(names,ids,finds);