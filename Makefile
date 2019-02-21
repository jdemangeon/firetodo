USER_ID = $(shell id -u)
GROUP_ID = $(shell id -g)

export UID = $(USER_ID)
export GID = $(GROUP_ID)

BIN = docker run -i -t --rm \
	--user "${UID}:${GID}" \
	-v "${PWD}:/app" \
	--env FIREBASE_TOKEN \
	-p "1234:1234" \
	firebase

help:
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies
	docker build --tag=firebase .
	$(BIN) npm install

clean: ## Clean up the lib folder for building
	@rm -rf dist

start: ## Start development server
	$(BIN) npm run start

build: clean ## Compile ES6 files to JS
	npm run build

deploy-production: ## Deploy to production
	$(BIN) bash -ci '\
		NODE_ENV=production; \
		make build && \
		firebase deploy -P production \
	'

deploy-staging: ## Deploy to staging
	$(BIN) bash -ci '\
		NODE_ENV=staging; \
		make build && \
		firebase deploy -P staging \
	'
