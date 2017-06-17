package main

import (
	"log"
	"net/http"

	"github.com/fugui/enroll/router"
	"github.com/gorilla/mux"
)

/**
*  Supported RESTful APIs:
*     /subscribers/{wechatID}   POST/GET/DELETE
*     /enrolls/{enrollID}       POST/GET/DELETE
*     /enrolles/{enrollID}/items/    POST  GET
**/
func main() {
	rtr := mux.NewRouter()
	rtr.HandleFunc("/enrolles/{name:[^/]+}/items", router.Items)

	http.Handle("/", rtr)

	log.Println("Listening...")
	http.ListenAndServe(":80", nil)
}
