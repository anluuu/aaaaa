

export default (lineNum, pileOne, pileTwo, pileThree) => {
  var newDeck = []
  var newPileOne = []
  var newPileTwo = []
  var newPileThree = []
  switch (lineNum) {
    case 1:
      newDeck = pileThree.concat(pileOne,pileTwo)
      break;
    case 2:
      newDeck = pileOne.concat(pileTwo,pileThree)
      break;
    case 3:
      newDeck = pileTwo.concat(pileThree,pileOne)
      break;
    default:
      break;
  }

  if(newDeck !== null){
    for (let i=0;i<20;i = i + 3){
      newPileOne.push(newDeck[i])
      newPileTwo.push(newDeck[i + 1])
      newPileThree.push(newDeck[i + 2])
    }
    return {newPileOne, newPileTwo, newPileThree, newDeck}
  }
}
