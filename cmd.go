package main

import (
	"fmt"
	"time"
)

func main() {

	loc, _ := time.LoadLocation("Asia/Shanghai")

	t := time.Now().In(loc)

	thisYear := time.Date(2017, time.January, 1, 0, 0, 0, 0, loc)

	fmt.Println(t, thisYear)
}
