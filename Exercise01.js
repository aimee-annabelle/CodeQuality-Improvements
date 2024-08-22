function calculateAverage(numbers) {
  const sum = numbers.reduce((previous, current) => previous + current);
  const average = sum / numbers.length;
  return average;
}
