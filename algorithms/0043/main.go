package p0043

func multiply(num1 string, num2 string) string {
	if num1 == "0" || num2 == "0" {
		return "0"
	}

	// string 转换成 []byte, 更容易取得相应位上的具体值
	n1 := []byte(num1)
	n2 := []byte(num2)

	// result 的长度只可能是 len(num1) + len(num2) 或 len(num1) + len(num2) -1
	result := make([]byte, len(num1)+len(num2))
	for i := len(n1) - 1; i >= 0; i-- {
		for j := len(n2) - 1; j >= 0; j-- {
			// 每个位上的乘积, 存入 tmp 对应的位置
			result[i+j+1] += (n1[i] - '0') * (n2[j] - '0')
			// 大于 10 向前进一位后取余
			if result[i+j+1] >= 10 {
				result[i+j] += result[i+j+1] / 10
				result[i+j+1] %= 10
			}
		}
	}

	// 前面提到, 首位是有可能出现为 0 的, 此时要去掉首位的 0
	if result[0] == 0 {
		result = result[1:]
	}
	for i := range result {
		result[i] += '0'
	}
	return string(result)
}
