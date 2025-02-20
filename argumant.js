function add(num1, num2){
    console.log ([...arguments])
    return num1+num2 + arguments
}

const result = add(4,6,8,9)

console.log(result)