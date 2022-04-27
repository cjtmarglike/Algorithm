##### Ref
```Javascript
function solution(numbers) {
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}
```
##### +
- good: 4/25 공부한 reduce 사용, 전체 합에서 빼는 방법 사용
- more: 합에서 뺀다는 생각은 해놓고 number배열의 합을 빼면 된다는 생각은 못하고 forEach 돌린 것.
