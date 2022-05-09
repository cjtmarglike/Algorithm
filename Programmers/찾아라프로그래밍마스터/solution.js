function solution(nums) {
    const s = new Set(nums).size
    return s <= nums.length/2 ? s : nums.length/2;
}
