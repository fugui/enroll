package model

import "time"

// Backhome is a data structure for persistence of all students back home time, inlcude date,time
type Backhome struct {
	studentID  string
	backday    string
	backtime   time.Time
	enroller   string
	enrolltime time.Time
}
