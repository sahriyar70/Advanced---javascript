let numbers = [4,6,78,3,78,4,74,8,];

let result = numbers.map(x=> x*x);

console.log(result);

let filar = numbers.filter(x=> x<4);

console.log(filar);

let find = numbers.find(x=> x>74);
console.log(find)

// ekhane map hocce kono  array ar sob elimant ke niya looping kore  kichu kora 
// filter hocce  akta array dibe 
// er find sudhu akta elimant dibe 