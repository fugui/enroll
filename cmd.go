package main

import (
	"fmt"
	"net/http"
	"time"
)

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hi there, I love %s!", r.URL.Path[1:])

}

func main() {
	fmt.Println("Hello, my enrolling!" + time.Now().String())
	http.HandleFunc("/", handler)
	http.ListenAndServe(":8080", nil)
}
