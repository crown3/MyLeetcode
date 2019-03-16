package p0020

func isValid(s string) bool {
	stack := make([]byte, 0, len(s))
	for _, char := range s {
		switch char {
		case '(':
			stack = append(stack, byte(char)+1)
		case '[', '{':
			stack = append(stack, byte(char)+2)
		case ')', ']', '}':
			if len(stack) > 0 && stack[len(stack)-1] == byte(char) {
				stack = stack[:len(stack)-1]
			} else {
				return false
			}
		}
	}
	return len(stack) == 0
}
