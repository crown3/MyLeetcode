package p0001

func twoSum(nums []int, target int) []int {
	indexMap := make(map[int]int, len(nums))
	for i, num := range nums {
		if j, ok := indexMap[target-num]; ok {
			return []int{j, i}
		} else {
			indexMap[num] = i
		}
	}
	return nil
}
