package p0006

import (
	"bytes"
)

func convert(s string, numRows int) string {
	if numRows == 1 || len(s) <= numRows {
		return s
	}
	result := bytes.Buffer{}
	// p pace 边距
	p := numRows*2 - 2
	// 处理第一行
	for i := 0; i < len(s); i += p {
		result.WriteByte(s[i])
	}
	// 处理中间的行
	for j := 1; j <= numRows-2; j++ {
		// 添加j行的第一个字符
		result.WriteByte(s[j])
		for k := p; k-j < len(s); k += p {
			result.WriteByte(s[k-j])
			if k+j < len(s) {
				result.WriteByte(s[k+j])
			}
		}
	}
	// 处理最后一行
	for r := numRows - 1; r < len(s); r += p {
		result.WriteByte(s[r])
	}
	return result.String()
}
