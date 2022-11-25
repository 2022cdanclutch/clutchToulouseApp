SHELL=/bin/bash

PROJECT_NAME=ClutchApp
WORKSPACE=$(shell pwd)

.PHONY: init doc

init:
	@npm install -g expo-cli
	@npm install -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer
	@npm install --save-dev react-docgen-typescript

doc:
	@npm run doc