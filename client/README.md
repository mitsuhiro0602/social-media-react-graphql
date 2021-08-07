heroku create social-app-docker-client

## herokuをビルドしてpushする
heroku container:push web -a social-app-docker-client

## コンテナをリリースする
heroku container:release web -a social-app-docker-client