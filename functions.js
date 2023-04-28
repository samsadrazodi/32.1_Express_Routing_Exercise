function convertAndValidateNums(numsString) {
    let result = [];
  
    for (let i = 0; i < numsString.length; i++) {
      let valToNumber = Number(numsString[i]);
  
      if (Number.isNaN(valToNumber)) {
        return new Error(
          `The value '${numsString[i]}' at index ${i} is not a valid number.`
        );
      }
  
      result.push(valToNumber);
    }
    return result;
  }


function calculate_mean(nums){
    if(nums.length === 0) return 0;
    else{let sum = 0;
    for (i=0; i< nums.length;i++){
        sum += nums[i]
    }
    return sum/ (nums.length)}
}


function calculate_median(nums){
    
    nums.sort(function(a, b) {
        return a - b;
    });

    let middleIndex = Math.floor(nums.length / 2);
    let median;

    if (nums.length % 2 === 0) {
        
        median = (nums[middleIndex - 1] + nums[middleIndex]) / 2;
    } else {
        
        median = nums[middleIndex];
    }

    return median;
}

function find_mode(nums){
    var freq = {};
    var maxFreq = 0;
    var modes = [];

    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];
        freq[num] = (freq[num] || 0) + 1;
        maxFreq = Math.max(maxFreq, freq[num]);
    }

    for (var num in freq) {
        if (freq[num] === maxFreq) {
            modes.push(num);
        }
    }

    return modes;
}

module.exports = {
    convertAndValidateNums,
    calculate_mean,
    calculate_median,
    find_mode}
  