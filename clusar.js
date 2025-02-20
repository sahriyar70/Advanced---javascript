function stopwatch(){
    let count = 0;
    return function(){
        count ++;
        return count;
    }
}

// akta function diya onno ekta function ke oparte kora ke cluser bola jay ---

const clock1 = stopwatch()
console.log(clock1)