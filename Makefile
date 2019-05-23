.PHONY: build

PWD = $(shell pwd)

default: build

build: 
	cp background.js nightmessenger/background.js
	cp day.js nightmessenger/day.js
	cp driver.js nightmessenger/driver.js
	cp manifest.js nightmessenger/manifest.js
	cp night.js nightmessenger/night.js
	cp nightmessenger128.png nightmessenger/nightmessenger128.png
	cp nightmessenger48.png nightmessenger/nightmessenger48.png
	cp nightmessenger16.png nightmessenger/nightmessenger16.png
	cp nightmode.css nightmessenger/nightmode.css
	cp off.png nightmessenger/off.png
	cp on.png nightmessenger/on.png
