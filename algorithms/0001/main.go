package problem0001

func twoSum(nums []int, target int) []int {
	indexMap := make(map[int]int, len(nums))
	for i, v := range nums {
		if j, ok := indexMap[target-v]; ok {
			return []int{j, i}
		}
		indexMap[v] = i
	}
	return nil
}
