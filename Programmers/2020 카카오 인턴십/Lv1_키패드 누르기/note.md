##### Ref
```Javascript
function solution(numbers, hand) {
  hand = hand[0] === "r" ? "R" : "L"
  let position = [1, 4, 4, 4, 3, 3, 3, 2, 2, 2]
  let h = { L: [1, 1], R: [1, 1] }
  return numbers.map(x => {
    if (/[147]/.test(x)) {
      h.L = [position[x], 1]
      return "L"
    }
    if (/[369]/.test(x)) {
      h.R = [position[x], 1]
      return "R"
    }
    let distL = Math.abs(position[x] - h.L[0]) + h.L[1]
    let distR = Math.abs(position[x] - h.R[0]) + h.R[1]
    if (distL === distR) {
      h[hand] = [position[x], 0]
      return hand
    }
    if (distL < distR) {
      h.L = [position[x], 0]
      return "L"
    }
    h.R = [position[x], 0]
    return "R"
  }).join("")
}
```
##### from Ref
- /[147]/.test(x): ?
- map은 요소를 새로운 요소로 할당하므로 thumbToPress를 바로 리턴해 join("")하는 방법도 있구나
##### + 
- 먼저 고려해본 것 
  - 각각의 위치를 배열([row, col])로 갖는 keypad object를 선언해두고 keypad[num.toString()]으로 찾아 사용하기
    - 이것도 실행은 성공했으나 Clean Code 적용 고민 중 배열로 위치를 표현하던 것을 객체로 변경하며 2안을 택하기로 함
- 고민했던 것
  - Clean Code에서 읽은 내용 적용하기(현재 Chapter3 Functions 읽는 중)
    - 길더라도 명확한 변수명 짓기 => 어지간하면 약어는 쓰지 않고 역할을 표현하도록 풀어 씀
    - 함수는 단순한 하나의 일을 하기 => 거리구하는 함수 하나를 따로 빼긴 했지만 더 읽어보고 더 고민해봐야 할 부분
    - 어쨌든 보는 개발자가 이해하기 쉽도록 짓기 => 계속 코드를 읽어보며 단순하고 명료하도록 고침
  - 절대값 구하는 다른 방법은 없는가: Math.abs() 함수 사용하는 방법이 있더라.
  - 삼항연산자가 어쩐지 꼴보기 싫어 hand는 잘라서 썼다.
- 헛짓
  - switch문에서 default를 else로 착각함
  - switch문에서 break 안 쓰고 결과 이해 못함
  - 노트북에서 세상 작은 화면에 커다란 글씨로 해서 8줄 내외로 보면서 코딩함,,
  - hand가 대문자 약어로 들어오는 것으로 착각
