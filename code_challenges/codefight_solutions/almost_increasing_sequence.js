/*
 * Source: CodeFights - Arcade Intro: Edge of the Ocean
 *
 * Question:
 *  Given a sequence of integers as an array, determine
 *  whether it is possible to obtain a strictly increasing
 *  sequence by removing no more than one element from the
 *  array.
 *
 * Example:
 *  Input: [1, 3, 2, 1]
 *  Output: False
 *
 *  Input: [1, 4, 6, 2]
 *  Output: True
 *
 * Take Aways:
 *  - If you're having trouble finding a solution using a 
 *    boolean flag, try an interager counter.
 *  - Consider both directions. 
 *  - Solution based off of redpix_ submission.
*/ 

// Time: O(n)
// Space: O(1)
function almostIncreasingSequence(sequence) {
  // A sequence of one always increases.
  // A sequence of two only requires one deletion.
  if(sequence.length == 2) return true;

  // Have to use number, because we are looking for
  // more than one error.
  var error = false;

  for(var i = 0; i < sequence.length - 1; i++){
      // if sequence not increasing
      if(sequence[i] >= sequence[i+1]){
          // Will deleting the previous number make it an increasing sequence
          var noStepBack = sequence[i-1] && sequence[i-1] >= sequence[i+1];
          // Will deleting the next number make it an increasing sequence
          var noStepFoward = sequence[i+2] && sequence[i] >= sequence[i+2];
          // 'noStepBack' will not hold accurate information if i is zero
          if(i > 0 && noStepBack && noStepFoward) {
              // If we cannot step backward and cannot step forward, then
              // it's an automatic false because it means we would need to
              // delete two numbers.
              return false;
          } else {
              // Typical error
              if(error) return false;
              error = true;
          }
      }
  }

  return true;
}