function calculateMatrixSum(matrix) {
  let sum = matrix
    .map((subArray) => {
      return subArray.reduce((prev, curr) => prev + curr);
    })
    .reduce((prev, curr) => prev + curr);
  return sum;
}
