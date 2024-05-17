function findMean(nums) {
    if (nums.length === 0) return 0;
    // reduce applies its function to each item in array 
    //acc = accumulated, cur = current value
    return nums.reduce(function(acc, cur) {
        return acc + cur;
    }) / nums.length
}

function findMedian(nums) {
    // sort method, if negative value: a is before b, if positve: b is before a
    // if 0, nothing changes
    nums.sort((a,b) => a - b);
    // get the middle index by dividing the length of the nums by 2
    let mIdx = Math.floor(nums.length /2);
    let median;
    // if the nums length is divisible by 2, the median equals the average of 
    // the two middle index, if its not divisible by 2, we have the middle index
    if (nums.length % 2 === 0) {
        median = (nums[mIdx] + nums[mIdx - 1]) / 2;
    } else {
        median = nums[mIdx];
    }
    return median
}

function freqCount(arr) {
    return arr.reduce(function(acc, next) {
        acc[next] = (acc[next] || 0) + 1;
        return acc;
    }, {});
}


function findMode(arr) {
    let counter = freqCount(arr);
    let count = 0;
    let mostFrequent;

    for (let key in counter) {
        if (counter[key] > count) {
            mostFrequent = key;
            count = counter[key];
        }
    } 
    return +mostFrequent;
}






module.exports = { findMean, findMedian, freqCount, findMode }