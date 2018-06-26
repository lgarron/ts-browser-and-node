.PHONY: js
js:
	tsc

.PHONY: run-node
run-node: js
	node d.js

.PHONY: run-browser
run-browser: js
	open browser/index.html
