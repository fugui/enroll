package enroll

import (
	"fmt"
	"net/http"
)

/**
*  Supported RESTful APIs:
*     /subscribers/{wechatID}   POST/GET/DELETE
*     /enrolls/{enrollID}       POST/GET/DELETE
*     /enrolles/{enrollID}/items/    POST  GET
**/

func appendBackHome(w http.ResponseWriter, r *http.Request) {
	//r.
}

func viewHandler(w http.ResponseWriter, r *http.Request) {
	title := r.URL.Path[len("/view/"):]
	p, _ := loadPage(title)
	fmt.Fprintf(w, "<h1>%s</h1><div>%s</div>", p.Title, p.Body)
}

func startWeb() {
	http.HandleFunc("/enrolles/{enrollID}/items/", viewHandler)
	http.ListenAndServe(":8080", nil)
}
