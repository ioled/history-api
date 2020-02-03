VERSION := $$(cat package.json | grep version | sed 's/"/ /g' | awk {'print $$3'})
tableName := $$(cat env.json | grep tableName | sed 's/"/ /g' | awk {'print $$3'})
SVC=ioled/history-api
PORT=5020

version v:
	@echo $(VERSION)

init i:
	@echo "[Dependencies] Installing dependencies"
	@npm install

docker:
	@echo [Docker] Building docker image
	@docker build -t $(SVC):$(VERSION) .

docker-compose co:
	@echo [Docker][Compose] Running with docker compose
	@docker-compose build
	@docker-compose up

deploy d:
	@echo "[Cloud Function Deployment] Deploying Function"
	@gcloud functions deploy historyApi --set-env-vars tableName=$(tableName) --runtime nodejs8 --trigger-http --entry-point historyApi

run r:
	@echo "[Running] Running service"
	@PORT=$(PORT) tableName=$(tableName) node src/start.js

.PHONY: version v init i deploy d run r
