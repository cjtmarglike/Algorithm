function solution(board, moves) {
    let score = 0;
    let basket = [];
    for(let move of moves) {
        let lastDoll = basket[basket.length-1];
        for(let i=0; i<board.length; i++) {
            let currDoll = board[i][move-1];
            if(0 === currDoll) {
                continue;
            } else {
                if(lastDoll === currDoll) { 
                    basket.pop();
                    score = score + 2;
                } else {
                    basket.push(currDoll);                
                }
                board[i][move-1] = 0;
                break;
            }
        }
    }
    return score;
}
