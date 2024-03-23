install:
	npm ci

start-frontend:
	make -C frontend start

build:
	rm frontend/build -rf
	npm run build