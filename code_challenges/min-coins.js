/**
 * Given a value and an array of coins, return the minimum
 * number of coins that when added together equal the provided
 * value.
 * @param {int} totalValue 
 * @param {object} coinDenom 
 */
function minCoins(totalValue, coinDenom) {
    let minCoins = [];

    // Fill array (content isn't import
    // as long as there is a way to differentiate 
    // indices that have been seen from thoes that 
    // have not been visited)
    // Prepopulating the array is not neccessary
    // in JS because the language allows access
    // to any array index.
    for(let i = 0; i <= totalValue; i++) {
        minCoins[i] = Number.MAX_SAFE_INTEGER;
    }

    // Base Case: There is no reasonable way of
    // making zero cent
    minCoins[0] = 0;

    // For each whole number from 1 to value, go through 
    // all the provided coin denominations. If the coin 
    // can be used to make the current value (i.e. choosen 
    // coin <= current value), then look up the minimum
    // number of coins that make up any remaining value. 
    for(let currentValue = 1; currentValue <= totalValue; currentValue++) {
        for(let coinIdx = 0; coinIdx < coinDenom.length; coinIdx++) {
            if (coinDenom[coinIdx] <= currentValue) {
              let remainingValue = [currentValue - coinDenom[coinIdx]];

              // The first part of the condition tests to see
              // if a minimum number of coins was set for the
              // remaining value (i.e. no combination of coins
              // including this coin will equal the current value)
              // The second condition ensures only the smallest 
              // number so far is remembered. 
              if (remainingValue !== Number.MAX_SAFE_INTEGER && remainingValue + 1 < minCoins[i]) {
                  minCoins[i] = sub_res + 1;
                }
            }
        }
    }
}

function minCoinsSequence(totalValue, coinDenom) {
    let minCoins = [];
    let coinsRequired = [];

    for(let i = 0; i <= totalValue; i++) {
        minCoins[i] = Number.MAX_SAFE_INTEGER;
        coinsRequired[i] = -1;
    }

    minCoins[0] = 0;
    for(let currentValue = 1; currentValue <= totalValue; currentValue++) {
        for(let coinIdx = 0; coinIdx < coinDenom.length; coinIdx++) {
            if(coinDenom[coinIdx] <= currentValue) {
                let remainingValue = minCoins[currentValue - coinDenom[coinIdx]];
                if(remainingValue !== Number.MAX_SAFE_INTEGER && remainingValue + 1 < minCoins[currentValue]) {
                    minCoins[currentValue] = remainingValue + 1;
                    coinsRequired[currentValue] = coinIdx;
                }
            }
        }
    }

    if(coinsRequired[totalValue] === -1) {
        console.log('The provided coins cannot be combined to make ', totalValue);
    } else {
      console.log(coinsRequired);
        let resultIdx = totalValue;
        let result = [];
        while(resultIdx !== 0) {
          let temp = coinDenom[coinsRequired[resultIdx]];
          result.push(temp);
          resultIdx -= temp;
        }
        console.log(`${totalValue} can be achieved with a
            minimum of ${minCoins[totalValue]} coins by 
            adding ${result.join(' ')}`);
    }
    return minCoins;
}