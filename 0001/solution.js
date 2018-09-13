/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const answer = []
    const len = nums.length
    nums.some((item, index) => {
        for (let idx = index + 1; idx < len; idx++) {
            console.log(item, nums[idx])
            if (item + nums[idx] === target) {
                answer.push(index, idx)
                return true
            }
        }
        return false
    })
    return answer
}
