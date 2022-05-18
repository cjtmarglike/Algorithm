function getDistance(from, to) {
  let YDistance = from.row - to.row
  let XDistance = from.col - to.col
  YDistance *= YDistance < 0 ? -1 : 1
  XDistance *= XDistance < 0 ? -1 : 1
	return YDistance + XDistance
}

function solution(numbers, hand) {
    let thumbToPress = ''
    let orderToPress = ''
		hand = hand[0].toUpperCase()
    let left  = { row: 3, col: 0 }
    let right = { row: 3, col: 2 }
    
    numbers.forEach((num, index) => {
      num = num === 0 ? 11 : num
      let target = {
      	row: parseInt((num-1)/3),
        col: (num+2) % 3
      }
      
      switch(target.col) {
        case 0:
          thumbToPress = 'L';
          break;
        case 2:
          thumbToPress = 'R';
          break;
        case 1:
          let leftToTarget  = getDistance(left, target)
          let rightToTarget = getDistance(right, target)
          
          if (leftToTarget !== rightToTarget) {
            thumbToPress = leftToTarget < rightToTarget ? 'L' : 'R'
          } else {
            thumbToPress = hand
          }
      }
      
      if (thumbToPress === 'L') {
        left = target
      } else {
        right = target
      }
      orderToPress += thumbToPress
    })
    
    return orderToPress;
}
