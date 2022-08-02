
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];
  if (matrix === undefined || matrix.length == 0) {
    return [];
  } else { 
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 !== 0) {
        arr.push(matrix[i].reverse());
      } else {
        arr.push(matrix[i]);
      }
    }
  return arr.flat();
}
}
