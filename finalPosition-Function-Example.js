const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  


const finalPosition = function (moves) {
  let final = [0, 0]     // this makes an array to push into. decalring the [0,0] makes a x-y grid to move upon

  for (const move of moves) {  // this will iterate through the moves array to compare the direction
    if (move === "north") {   // this if else statement will compare the move index with the intended input
      final[1] += 1; // final[1] indicates final[x,0]  the += 1 will add the number given into the proper index chosen 
    } else if (move === "east") {
      final[0] += 1;
    } else if (move === "south") {
      final[1] -= 1;
    } else if (move === "west") {
      final[0] -= 1;
    }
  }
  return final; // this will return the amount back into the final array
}

console.log(finalPosition(moves));