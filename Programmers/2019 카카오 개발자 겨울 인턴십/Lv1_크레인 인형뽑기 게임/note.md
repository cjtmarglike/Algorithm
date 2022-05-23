##### Ref
```Javascript
const transpose = matrix =>
    matrix.reduce(
        (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
        []
    );

const solution = (board, moves) => {
    const stacks = transpose(board).map(row =>
        row.reverse().filter(el => el !== 0)
    );
    const basket = [];
    let result = 0;

    for (const move of moves) {
        const pop = stacks[move - 1].pop();
        if (!pop) continue;
        if (pop === basket[basket.length - 1]) {
            basket.pop();
            result += 2;
            continue;
        }
        basket.push(pop);
    }

    return result;
};
```
##### from Ref
- 
##### + 
- 먼저 고려해본 것 
  - 잡아온 인형을 일단 basket에 쓸어 담고 reduce를 이용해 붙어있는 같은 인형들을 세기
    - reduce 사용법이 자꾸 헷갈리기도 하고 굳이 전부 넣어 다시 비교하기보다 바로 처리하는 게 낫지 않나 싶었음
- 고민했던 것
  - Clean Code에서 읽은 내용 적용하기(현재 Chapter3 Functions 읽는 중)
    - 길더라도 명확한 변수명 짓기 => basket[basket.length-1] === board[i][move-1]보다 lastDoll === currDoll이 직관적으로 보였음
    - 함수는 단순한 하나의 일을 하기 => 더 읽어보고 고민해보자
- 웃긴 것
  - 얼마 전에 풀다가 제출을 못했는지 풀이가 남아 있었는데 새로 짠 코드와 변수명 변경된 것 외 큰 차가 없었다.
- 헛짓
  - 변수명 정리 과정에서 인형 값에 해당하는 배열의 요소를 변수에 할당하고 로직 처리 후 할당한 변수를 0으로 비워 테스트에 실패했다.
- 할 것
  - reduce, map 다시 찾아보고 여러 번 써볼 것
  - 배열을 다시 보자
  - 함수 파트 더 읽어보고 고민해보자
