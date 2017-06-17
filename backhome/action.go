package backhome

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"strconv"
	"strings"
	"time"
)

/* JSON Data format:
 *   {
 *     "school"  : "01 深圳外国语初中部",
 *     "class"   : "01 初二(3)班"
 *     "student" : "58 习近平",
 *     "backTime"  : "17:28",
 *     "applyby"   : "妈妈",
 *   }
 *
 */
type backItem struct {
	School    string `json:"school"`
	Class     string `json:"banji"`
	Student   string `json:"student"`
	BackTime  string `json:"backtime"`
	ApplyBy   string `json:"applyby"`
	ApplyTime string `json:"applytime"`
}

// Action for backhome
func Action(w http.ResponseWriter, r *http.Request) {

	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		fmt.Printf("Error reading body: %v", err)
		http.Error(w, "can't read body", http.StatusBadRequest)
		w.WriteHeader(http.StatusBadRequest)
	}

	fmt.Println("Post Item: ", body)

	// the first step, get all fields
	var item backItem
	if json.Unmarshal(body, &item) != nil {
		w.WriteHeader(http.StatusBadRequest)
	}

	if writeToday(item) {
		w.WriteHeader(http.StatusOK)
	} else {
		w.WriteHeader(http.StatusBadRequest)
	}
}

var today = -1
var todayItems = [50]backItem{}

func writeToday(item backItem) bool {
	// init date fields
	now := time.Now()
	t := now.Day()
	fileName := "backhome-" + now.Format("2006-01-02") + ".json"

	// clear cache if it is the next day
	if today == -1 {
		// load data from file to cache
		fmt.Println("load cache...")
		data, err := ioutil.ReadFile(fileName)
		if err == nil {
			json.Unmarshal(data, &todayItems)
		}
	}

	if t != today {
		for _, v := range todayItems {
			v.BackTime = ""
			v.ApplyBy = ""
			v.ApplyTime = ""
		}
		today = t
	}

	//update the cache
	fs := strings.Fields(item.Student)
	if len(fs) < 2 {
		return false
	}
	idx, err := strconv.Atoi(fs[0])
	if err != nil {
		return false
	}
	item.ApplyTime = time.Now().Format("15:04")
	todayItems[idx-1] = item

	//write cache to file (persistence)
	data, err := json.Marshal(todayItems)
	if err == nil {
		ioutil.WriteFile(fileName, data, 0644)
	}

	return true
}

// GetHistory is for GET request, need a query parameter "date"
func GetHistory(w http.ResponseWriter, r *http.Request) {
	date := r.URL.Query().Get("date")
	if date != "" {
		fmt.Println("Query history for ", date)

		fileName := "backhome-" + date + ".json"
		data, err := ioutil.ReadFile(fileName)
		if err == nil {
			w.Write(data)
			return
		}
	}
	w.WriteHeader(http.StatusBadRequest)
}
