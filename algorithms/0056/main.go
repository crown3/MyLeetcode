package p0056

import (
	"sort"
)

// Interval Definition for an interval.
type Interval struct {
	Start int
	End   int
}

func merge(intervals []Interval) []Interval {
	if len(intervals) <= 1 {
		return intervals
	}

	sort.Slice(intervals, func(i, j int) bool {
		return intervals[i].Start < intervals[j].Start
	})

	result := make([]Interval, 0, len(intervals))

	tmp := intervals[0]
	for i := 0; i < len(intervals); i++ {
		if intervals[i].Start <= tmp.End {
			tmp.End = max(tmp.End, intervals[i].End)
		} else {
			result = append(result, tmp)
			tmp = intervals[i]
		}
	}

	result = append(result, tmp)
	return result
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
