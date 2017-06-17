package router

import (
	"net/http"

	"github.com/fugui/enroll/backhome"
)

// Items is the entry for maintaining all items of enrolling.
func Items(w http.ResponseWriter, r *http.Request) {
	if r.Method == "POST" {
		backhome.Action(w, r)
	} else if r.Method == "GET" {
		backhome.GetHistory(w, r)
	} else {
		w.WriteHeader(http.StatusBadRequest)
	}

	if r.Response.StatusCode >= 400 {
		w.Write([]byte("error request"))
	}
}
