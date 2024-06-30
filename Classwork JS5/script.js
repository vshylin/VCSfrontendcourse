function matchingLotoNums(selectedNumbers, winningNumbers) {
let counter = 0;
  selectedNumbers.array.forEach(element => {
    if (winningNumbers.includes(element)) {
        counter++;
    }
  });
return counter;
}