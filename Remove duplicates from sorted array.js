/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    
    let k = 1; // Start at the first unique element
    
    for (let i = 1; i < nums.length; i++) {
        // If current element is different from the last unique one
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i]; // Move it to the next unique position
            k++;
        }
    }
    
    return k;
};
