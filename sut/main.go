package main

import (
	"fmt"
	"net/http"
	"os"
	"text/template"
)

func main() {
	exampleHandler := func(w http.ResponseWriter, r *http.Request) {
		t, err := template.ParseFiles("example_dotcom.html")
		if err != nil {
			fmt.Fprintf(os.Stderr, "failed to parse example.com HTML file %v", err)
			w.WriteHeader(http.StatusInternalServerError)
			return
		}
		if err := t.Execute(w, nil); err != nil {
			fmt.Fprintf(os.Stderr, "failed to write HTML file %v", err)
			w.WriteHeader(http.StatusInternalServerError)
			return
		}
		return
	}

	http.HandleFunc("/example", exampleHandler)

	if err := http.ListenAndServe(":8080", nil); err != nil {
		fmt.Fprintf(os.Stderr, "failed to start listen and serve %v", err)
		os.Exit(1)
	}
}
