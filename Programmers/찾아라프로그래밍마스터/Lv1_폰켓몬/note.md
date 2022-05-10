##### Ref
```Javascript

/* 단순 연습 문제긴 하지만 어제 Clean Code Ch1에서 Naming의 중요성을 강조했었다 */
/* Ch2 Naming 읽은 후 이름 짓기에도 신경을 써볼 것 */
function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length
}

function solution(nums) {
    const noDuplicatePokemon = new Set(nums);
    const pokemonVarietyCount = noDuplicatePokemon.size;
    const pokemonCounts = nums.length;
    return pokemonVarietyCount > pokemonCounts/2 ? pokemonCounts/2 : pokemonVarietyCount;

}
```
###### Set: JavaScript 표준 내장 객체
```

```
##### +
- obj에 넣어 사이즈로 비교했다가 실패(5/9)
- js에서 java의 Set과 같은 게 무엇인가
- Set이었다
- +3점 획득, 통과(5/10)

- 다른 사람들 풀이를 보니 Set의 사이즈 대신 {...new set([nums])}.length를 썼던데 왜일까?
- 이해하기 쉬운 네이밍에도 신경 쓰자
- 변수를 분리하는 것과 삼항연산자로 바로 쓰는 것의 차이
- sort()로 한 번 정렬하고 reduce로 비교하는 안도 생각해봤었는데 정렬에 불필요한 시간이 쓰일 것 같아 패스함
  -> sort와 소요 시간 관계는?
