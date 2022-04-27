function solution(absolutes, signs) {
    var answer = 0;
    
    absolutes.forEach((abs, i) => {
        answer += abs * (signs[i] ? 1 : -1);
    });
    
    return answer;
}
