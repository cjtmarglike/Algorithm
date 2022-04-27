##### Ref
```Javascript
function solution(absolutes, signs) {
    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}
```
###### Array.reduce(callback[, initialValue])
```
callback: 배열 각 요소에 실행할 callback 함수는 다음 네 가지 인수를 받음
  - accumulator: 콜백 반환값을 누적. 콜백의 이전 반환값 또는 initialValue의 값.
  - currentValue: 처리할 현재 요소
  - currentIndex(Optional): initialValue 제공한 경우 0, 아니면 1부터 시작.
  - array(Optional): reduce()를 호출한 배열
initialValue(Optional): 콜백 최초 호출 시 첫 번째 인수 값. 초기값 없을 시 배열 첫 번째 요소 사용하므로, 빈 배열에서 호출 시 오류.
```
##### +
- 2안으로 고려해본 것: absolutes array를 map으로 sign값 곱해 할당하고 한 번 더 돌려 더하기
- 굳이 두 번 돌릴 필요가 없을 것 같아 관둠
- 과제: map, forEach, for문 등 비교
