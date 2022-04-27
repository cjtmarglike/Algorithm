function solution(numbers) {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let sum = arr.reduce((acc, cur) => acc + cur);
    numbers.forEach(n => sum -= n);
    
    return sum;
}
