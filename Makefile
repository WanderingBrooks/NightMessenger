.PHONY: build

PWD = $(shell pwd)

default: clean build

build: clean
	cp manifest.json nightmessenger/manifest.json
	cp driver.js nightmessenger/driver.js
	cp background.js nightmessenger/background.js
	cp day.js nightmessenger/day.js
	cp night.js nightmessenger/night.js
	cp nightmessenger16.png nightmessenger/nightmessenger16.png
	cp nightmessenger48.png nightmessenger/nightmessenger48.png
	cp nightmessenger128.png nightmessenger/nightmessenger128.png
	cp nightmode.css nightmessenger/nightmode.css
	cp off.png nightmessenger/off.png
	cp on.png nightmessenger/on.png

clean:
	rm -rf nightmessenger/
	mkdir nightmessenger
	touch nightmessenger/.gitkeep